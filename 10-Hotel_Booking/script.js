

// Get API data
async function getHotelData() {
    try {
        const response = await fetch('/10-Hotel_Booking/hotel.json')
        return await response.json() // Return the JSON object

    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}

// unoptimized code
// getHotelData().then(data => {
//     return hotelData = data
// })

// optimized code
getHotelData().then(data => {
    hotelData = data
    console.log(hotelData)
})

// passing to add event listener funciton hotelInfo as an argument so we can see what is in the event object
// store in a variable  document.querySelectorAll("a")
// use that variable in a loop over each element and addEventListener to each one. forEach is suggested to use

document.querySelector('#marriott').addEventListener('click', hotelInfo)
document.querySelector('#sheraton').addEventListener('click', hotelInfo)
document.querySelector('#hilton').addEventListener('click', hotelInfo)

// Find a match in hotelData and find out what was clicked on and match that name to hotel name in json
function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#type').textContent = `${hotelChoice.roomTypes}`
    document.querySelector('#picture').src = `/10-Hotel_Booking/images/${hotelChoice.picture}`
}

