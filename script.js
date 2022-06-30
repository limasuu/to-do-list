const DIASEMANA_NAV= $("#dia-semana-nav");
const DIA_NAV= $("#dia-nav");
const MES_NAV= $("#mes-nav");

const atualizarData= () => {
    const diasSemana= ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses= ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const data= new Date();

    DIASEMANA_NAV.text(diasSemana[data.getUTCDay()]);
    DIA_NAV.text(data.getDate());
    MES_NAV.text(meses[data.getMonth()]);
};


$(document).ready( () => {

    atualizarData();
   
});
