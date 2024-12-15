import React, { useEffect, useRef, useState } from 'react'

const TestFunc = () => {

  const [mediaStream, setMediaStream] = useState(null);
  const [loading, setLoading] = useState(true);
  const permissionRef = useRef(false)

  useEffect(() => {
    const getMediaStream = async () => {
      let aMediaStream = await navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: true
      })
      setMediaStream(aMediaStream);
      setLoading(false);
      permissionRef.current = true
    }
    if (!permissionRef.current) {
      getMediaStream();
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  console.log("::::: HERE ARE THE MEDIA STREAM TRACKS :::::")
  console.log(mediaStream.getTracks())

  return <div>Loaded 🤓🤓</div>
}

export default TestFunc