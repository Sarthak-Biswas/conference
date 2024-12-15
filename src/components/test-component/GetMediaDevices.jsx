import React, { useEffect, useState } from 'react'

const GetMediaDevices = () => {

    const [devices, setDevices] = useState(null);

    useEffect(() => {
        const getUserDevices = async () => {
            // await navigator.mediaDevices.getUserMedia({audio: true, video: false});
            const userDevices = await navigator.mediaDevices.enumerateDevices();
            setDevices(userDevices);
        }
        getUserDevices();
    }, [])

  return (
    <ul>
        {
        devices &&
        devices.map((device) => {
            console.log(device);
            return <li>{device.label}</li>;
        })
    }
    </ul>
  );
}

export default GetMediaDevices