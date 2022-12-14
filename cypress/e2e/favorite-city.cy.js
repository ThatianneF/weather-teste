/// <reference types="cypress" />

describe('Favorite city', () => {

    it('Deve fazer um GET com a cidade favorita com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=0.1276&appid=89db80af318dc0be3caec69b88d504b0&q=London' ,
            body: {
                "coord": {
                    "lon": -43.2075,
                    "lat": -22.9028
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "main": {
                    "temp": 292.93,
                    "feels_like": 293.08,
                    "temp_min": 292.15,
                    "temp_max": 294.23,
                    "pressure": 1019,
                    "humidity": 81
                },
                "visibility": 10000,
                "name": "Rio de Janeiro",
                "cod": 200
            }
        }).then((response) => {
          expect(response.status).to.equal(200)
        })
        
    });
    
});
