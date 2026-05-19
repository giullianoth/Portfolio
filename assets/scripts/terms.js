import Modal from "./modal.js"

const termsLink = document.querySelector(".j_open_terms")

const termsContent = ({
    pt: `
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
    `,
    en: `
        <section>
            <header class="th-heading">
                <h2>Privacy & Terms of Use</h2>
            </header>
            <div class="th-text-wrapper">
                <h3>1. Transparency and Data</h3>
                <p>This website is a professional portfolio. Data collection occurs minimally and only in the following scenarios:</p>
                <ul>
                    <li><strong>Contact Form:</strong> When you send a message, the data (Name and Email) is used exclusively to respond to your professional request.</li>
                    <li><strong>Analytics:</strong> We can use analytics tools (such as Google Analytics) to understand the volume of visits and improve the browsing experience through anonymous cookies.</li>
                </ul>
                <h3>2. Use of Images and Intellectual Property</h3>
                <p>All content, design, and source code in this portfolio are the property of <strong>Giulliano Guimarães</strong>, except where otherwise indicated (such as client company logos or third-party technologies).
                </p>
                <p>Total or partial reproduction for commercial purposes without prior authorization is prohibited.</p>
                <h3>3. Responsability</h3>
                <p>External links (to social media or projects in production) have their own privacy policies. I am not responsible for the content or practices of third-party websites.</p>
                <h3>4. Your Rights</h3>
                <p>According to the <strong><a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">Brazilian General Data Protection Law (LGPD)</a></strong>, you have the right to request the deletion of any data submitted through the contact form at any time. To do so, simply contact us via the email address available in the contact section.</p>
            </div>
        </section>
    `
})

const Terms = () => {
    termsLink.addEventListener("click", event => {
        event.preventDefault()
        const lang = termsLink.dataset.lang || "pt"
        Modal(termsContent[lang])
    })
}

export default Terms