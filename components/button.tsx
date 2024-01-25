"use client"

export default function Button() {

    const handleClick = () => {
        console.log("saluuut")
      }

    return (
        <div>
            <button onClick={handleClick}>Saluuut</button>
        </div>
    )

}