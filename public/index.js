window.onload = () => {
  init();
};

async function init() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  const audio = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      sampleRate: 44100,
      mute: true,
    },
  });

  document.getElementById("video").srcObject = stream;
  const peer = createPeer();

  const mixedStream = new MediaStream([
    ...stream.getTracks(),
    ...audio.getTracks(),
  ]);

  mixedStream.getTracks().forEach((track) => peer.addTrack(track, mixedStream));
}

function createPeer() {
  const peer = new RTCPeerConnection({
    iceServers: [
      {
        urls: "stun:stun.stunprotocol.org",
      },
    ],
  });
  peer.onnegotiationneeded = () => handleNegotiationNeededEvent(peer);

  return peer;
}

async function handleNegotiationNeededEvent(peer) {
  const offer = await peer.createOffer();
  await peer.setLocalDescription(offer);
  const payload = {
    sdp: peer.localDescription,
  };

  const { data } = await axios.post("/broadcast", payload);
  const desc = new RTCSessionDescription(data.sdp);
  peer.setRemoteDescription(desc).catch((e) => console.log(e));
}
