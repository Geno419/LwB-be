const webrtc = require("wrtc");


let senderStream;

async function consumerController({ body }, res) {
    try {
        console.log("viewing");
        const peer = new webrtc.RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                }
            ]
        });
        const desc = new webrtc.RTCSessionDescription(body.sdp);
        await peer.setRemoteDescription(desc);

        senderStream.getTracks().forEach(track => peer.addTrack(track, senderStream));
        const answer = await peer.createAnswer();
        await peer.setLocalDescription(answer);
        const payload = {
            sdp: peer.localDescription
        };

        res.json(payload);
    } catch (error) {
        console.log("error with viewing", error);
        res.status(500).json({ error: "Error occurred while viewing" });
    }
}

async function broadcastController({ body }, res) {
    try {
        console.log("Stream started");
        const peer = new webrtc.RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                }
            ]
        });
        peer.ontrack = (e) => handleTrackEvent(e, peer);
        const desc = new webrtc.RTCSessionDescription(body.sdp);
        await peer.setRemoteDescription(desc);
        const answer = await peer.createAnswer();
        await peer.setLocalDescription(answer);
        const payload = {
            sdp: peer.localDescription
        };

        res.json(payload);
    } catch (error) {
        console.log("error with broadcast", error);
        res.status(500).json({ error: "Error occurred while broadcasting" });
    }
}


function handleTrackEvent(e) {
    senderStream = e.streams[0];
}

module.exports = { consumerController, broadcastController };