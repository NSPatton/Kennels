const remoteURL = "http://localhost:5002"

export const getLocationById = (Id) => {
    //be sure your Locations have good data and related to a location and customer
    return fetch(`${remoteURL}/locations/${Id}`)
    .then(res => res.json())
  }
  
  export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(res => res.json())
  }
  
  export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
}