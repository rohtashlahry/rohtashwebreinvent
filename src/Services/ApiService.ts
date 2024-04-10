import Constants from "../constants/constants"

const API_BASE_URL = 'https://reqres.in/api/';


class ApiService {
  static async getAPIData(url: string, method: string = Constants.GET, data: any = null) {
    const requestOptions: RequestInit = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : null,
    };

    try {
      const response = await fetch(`${API_BASE_URL}${url}`, requestOptions);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error: any) {
      console.error('Error:', error.message);
      throw error;
    }
  }

  static async get(url: string) {
    return this.getAPIData(url);
  }

  static async post(url: string, data: any) {
    return this.getAPIData(url, Constants.POST, data);
  }
  static async delete(url: string, data: any) {
    return this.getAPIData(url, Constants.DELETE, data);
  }
  static async patch(url: string, data: any) {
    return this.getAPIData(url, Constants.PATCH, data);
  }

}

export default ApiService;