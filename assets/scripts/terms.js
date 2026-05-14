import Modal from "./modal.js"

const termsLink = document.querySelector(".j_open_terms")

const termsContent = `
    <section>
        <header class="th-heading">
            <h2>Privacidade & Termos de Uso</h2>
        </header>
        <div class="th-text-wrapper">
            <h3>1. Transparência e Dados</h3>
            <p>Este site é um portfólio profissional. A coleta de dados ocorre de forma mínima e apenas nos seguintes cenários:</p>
            <ul>
                <li><strong>Formulário de Contato:</strong> Ao enviar uma mensagem, os dados (Nome e E-mail) são utilizados exclusivamente para responder à sua solicitação profissional.</li>
                <li><strong>Analytics:</strong> Podemos utilizar ferramentas de análise (como Google Analytics) para entender o volume de visitas e melhorar a experiência de navegação através de cookies anônimos.</li>
            </ul>
            <h3>2. Uso de Imagens e Propriedade Intelectual</h3>
            <p>Todo o conteúdo, design e código-fonte deste portfólio são de propriedade de <strong>Giulliano Guimarães</strong>, exceto onde indicado o contrário (como logos de empresas clientes ou tecnologias de terceiros).
            </p>
            <p>A reprodução total ou parcial para fins comerciais sem autorização prévia é proibida.</p>
            <h3>3. Responsabilidade</h3>
            <p>Os links externos (para redes sociais ou projetos em produção) possuem suas próprias políticas de privacidade. Não me responsabilizo pelo conteúdo ou práticas de sites de terceiros.</p>
            <h3>4. Seus Direitos</h3>
            <p>De acordo com a <strong><a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">Lei Geral de Proteção de Dados Pessoais (LGPD)</a></strong>, você tem o direito de solicitar a exclusão de qualquer dado enviado através do formulário de contato a qualquer momento. Para isso, basta entrar em contato através do e-mail disponível na seção de contato.</p>
        </div>
    </section>
`

const Terms = () => {
    termsLink.addEventListener("click", event => {
        event.preventDefault()
        Modal(termsContent)
    })
}

export default Terms