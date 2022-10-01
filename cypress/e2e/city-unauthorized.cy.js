/// <reference types="cypress" />

describe('City- cidade de origem', () => {

    it('Deve fazer um GET com a cidade de origem nao autorizado', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=rio de janeiro&appid=89db80af318dc0be3caec69b88d504b00' ,
            failOnStatusCode: false,
            body: {
                "coord": {
                    "lon": -43.2075,
                    "lat": -22.9028
                },
                "timezone": -10800,
                "id": 3451190,
                "name": "Rio de Janeiro",
                "cod": 200
            }
        }).then((response) => {
            expect(response.status).to.equal(401)
        })
        
    });
    
});
