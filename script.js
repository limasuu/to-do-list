const DIASEMANA_NAV= $("#dia-semana-nav");
const DIA_NAV= $("#dia-nav");
const MES_NAV= $("#mes-nav");
const QNTDTAREFAS_NAV= $("#qntd-tarefas-nav");

const ADD_BOTAO= $("#add-botao");
const TAREFA_INPUT= $("#nova-tarefa");
const HORARIO_INPUT= $("#novo-horario");
const ALERTA_PAR= $("#alerta");

const TAREFAS_UL= $("ul");

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

    ADD_BOTAO.click( () => {

        const MSG_TAM= "A mensagem deve conter até 30 caracteres.";
        const MSG_BRANCO= "Todos os campos devem ser preenchidos."   
        
        ALERTA_PAR.addClass("invisible");
        ALERTA_PAR.text("");

        const novaTarefa= TAREFA_INPUT.val();
        const novoHorario= HORARIO_INPUT.val();

        if(novaTarefa.length > 30){
            ALERTA_PAR.removeClass("invisible");
            ALERTA_PAR.text(MSG_TAM);
        }
        
        if(!novaTarefa || !novoHorario){
            ALERTA_PAR.removeClass("invisible");
            ALERTA_PAR.text(MSG_BRANCO);
        }
        
        if(ALERTA_PAR.hasClass("invisible")){
            $(`<li class='col-md-12 d-flex justify-content-between align-items-center flex-wrap'>           
                <hr class="sublinhado"/>
                <i class="fa-regular fa-heart"></i>                   
                <span class="tarefa col-md-8">
                    ${novaTarefa}                         
                </span>                                    
                <span class="tarefa col-md-3">
                    ${novoHorario}
                </span>                                         
                <i class="botao-tarefa fa-solid fa-check"></i> 
                <i class="botao-tarefa fa-solid fa-trash-can"></i>                                                     
            </li>`).appendTo('ul');
   
                
            limparCampos();
        }
    });

   
});
