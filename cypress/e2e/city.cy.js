/// <reference types="cypress" />

describe('City- cidade de origem', () => {

    it('Deve fazer um GET com a cidade de origem com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=rio de janeiro&appid=89db80af318dc0be3caec69b88d504b0&units=metric' ,
            body: {
                "coord": {
                    "lon": -43.2075,
                    "lat": -22.9028
                },
                "main": {
                    "temp": 18.98,
                    "feels_like": 19.07,
                    "temp_min": 18.98,
                    "temp_max": 20.53,
                    "pressure": 1017,
                    "humidity": 82
                },
                "timezone": -10800,
                "id": 3451190,
                "name": "Rio de Janeiro",
                "cod": 200
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('main')
        })
        
    });
    
});
