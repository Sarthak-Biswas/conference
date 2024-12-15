import React, { useEffect, useState } from 'react'

const SecondFunc = () => {
    const [renderCount, setRenderCount] = useState(0);
    const [watch, setWatch] = useState(false);

    useEffect(() => {
        console.log("Use Effect hook is fired because 'watch' state changed.")
    }, [watch, renderCount]);

    const renderButtonClick = () => {
        setRenderCount(renderCount + 1);
    }

    const watchButtonClick = () => {
        setRenderCount(renderCount + 1);
        setWatch(!watch);
    }

    console.log("This is the re-render state...")
  return (
    <div>
        <h2>::: Page is rendered {renderCount} times :::</h2>
        <button onClick={renderButtonClick}>Re-render Me</button>
        <button onClick={watchButtonClick}>Change Watch</button>
        <h3>::: Watch value now is {watch.toString()} :::</h3>
    </div>
  )
}

export default SecondFunc