import validateJson from '../../util/jsonValidator';

describe('Testes da Consulta de CEP', () => {
    let viaCepSchema;

    before(() => {
        cy.fixture('viaCepSchema.json').then(testData => {
            viaCepSchema = testData;
        });
    });

    it('Deve buscar CEP valido', () => {
        cy.request({
            method: 'GET',
            url: 'https://viacep.com.br/ws/14400010/json/'
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.cep).to.equal('14400-010');
            expect(response.body.logradouro).to.equal('Rua Homero Pacheco Alves');
            expect(response.body.complemento).to.equal('até 2799/2800');
            expect(response.body.bairro).to.equal('Centro');
            expect(response.body.localidade).to.equal('Franca');
            expect(response.body.uf).to.equal('SP');
            expect(response.body.ibge).to.equal('3516200');
            expect(response.body.gia).to.equal('3104');
            expect(response.body.ddd).to.equal('16');
            expect(response.body.siafi).to.equal('6425');
            expect(validateJson(response.body, viaCepSchema)).to.be.true;
        })
    })
})
