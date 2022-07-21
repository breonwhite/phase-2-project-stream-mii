export const baseUrl = 'http://localhost:3001';

export const headers = {
  "Accept" : "application/json",
  "Content-Type": "application/json"
}

export const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };