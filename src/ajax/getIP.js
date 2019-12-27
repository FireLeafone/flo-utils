/**
 * 获取 IP 通过 webkitRTCPeerConnection
 * @param callback {Function} 回调函数
 * @return undefined
 * JavaScript是无法获得或存储在客户端的IP。
 * 但是由于JavaScript能够发送HTTP请求，而服务器端语言能够获取用户的公网IP，所以你可以利用这个获取IP。
 * 换句话说，如果你想得到一个用户就取决于请求任何服务器检索公网IP
 * @link https://developer.mozilla.org/zh-CN/docs/Web/API/RTCPeerConnection/RTCPeerConnection#Browser_compatibility
 */
function getIP(callback) {
  try {
    // 兼容
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    if (!myPeerConnection) {
      callback && callback(false);
      return;
    }

    var pc = new myPeerConnection({
        iceServers: []
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

    function iterateIP(ip) {
        if (!localIPs[ip]) callback(ip);
        localIPs[ip] = true;
    }

    // 创建虚假数据通道
    pc.createDataChannel("");

    // 创建服务，设置描述
    pc.createOffer().then(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });

        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function(reason) {
      callback && callback(reason);
    });

    // 监听候选事件
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
  } catch (err) {
    console.error(err);
    callback && callback(false);
  }
}

export default getIP;
