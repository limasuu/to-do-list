const DIASEMANA_NAV= $("#dia-semana-nav");
const DIA_NAV= $("#dia-nav");
const MES_NAV= $("#mes-nav");
const QNTDTAREFAS_NAV= $("#qntd-tarefas-nav");

const ADD_BOTAO= $("#add-botao");
const TAREFA_INPUT= $("#nova-tarefa");
const HORARIO_INPUT= $("#novo-horario");


const atualizarData= () => {
    const diasSemana= ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const meses= ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const data= new Date();

    DIASEMANA_NAV.text(diasSemana[data.getUTCDay()]);
    DIA_NAV.text(data.getDate());
    MES_NAV.text(meses[data.getMonth()]);
};

const limparCampos= () => {
    TAREFA_INPUT.val("");
    HORARIO_INPUT.val("");
};

$(document).ready( () => {

    atualizarData();
    QNTDTAREFAS_NAV.text(0);
    limparCampos();


   
});
