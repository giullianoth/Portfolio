# Giulliano Guimarães | Portfolio

- Disponível em | Available in: **Português - BR | English**

> Site pessoal de portfólio bilingue focado em alta performance, desenvolvido com Next.js (App Router), TypeScript e focado em práticas modernas de UX/UI.
>
> *A high-performance, bilingual personal portfolio website developed with Next.js (App Router), TypeScript, and focused on modern UX/UI practices.*

---

## 🚀 Tecnologias e Ferramentas | *Technologies and Tools*

O projeto foi construído utilizando o ecossistema mais moderno do ecossistema React/Next.js:

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** CSS Modules (com foco em arquitetura Mobile-First e Semântica HTML)
* **Validação de Dados:** [Zod](https://zod.dev/)
* **E-mails** [EmailJS](https://www.emailjs.com/) (Integração segura via Node.js Server Actions)
* **Ícones** [React Icons](https://react-icons.github.io/react-icons/) (Otimizado via tree-shaking)

*The project was built using the most modern ecosystem of the React/Next.js ecosystem:*

* *__Framework:__ [Next.js](https://nextjs.org/) (App Router)*
* *__Language:__ [TypeScript](https://www.typescriptlang.org/)*
* *__Styling:__ CSS Modules (with a focus on Mobile-First architecture and HTML semantics)*
* *__Data Validation:__ [Zod](https://zod.dev/)*
* *__Emails:__ [EmailJS](https://www.emailjs.com/) (Secure integration via Node.js Server Actions)*
* *__Icons:__ [React Icons](https://react-icons.github.io/react-icons/) (Optimized via tree-shaking)*

---

## 💎 Diferenciais Técnicos & Performance | *Technical Advantages & Performance*

Este projeto foi desenhado sob rígidos padrões de engenharia de software para garantir pontuações máximas no **Google PageSpeed Insights**:

* **Internacionalização Dinâmica (i18n):** Arquitetura escalável baseada em Rotas Dinâmicas (`/[lang]`), unificando o código estrutural para renderização em múltiplos idiomas (PT-BR / EN) sem duplicação de componentes.
* **Server Actions & Segurança:** Gerenciamento de formulários utilizando o hook `useActionState` nativo do React. O envio de e-mails via EmailJS é processado estritamente no lado do servidor (`"use server"`), ocultando chaves privadas e tokens contra engenharia reversa no cliente.
* **Otimização Extrema de Recursos:** 
    * Remoção completa de scripts de terceiros e CDNs pesadas (como fontes injetadas e scripts do Font Awesome).
    * Uso do pacote nativo `next/font` para auto-hospedar e otimizar fontes do Google localmente durante o build, eliminando *Layout Shifts* (CLS) e reduzindo o tempo de carregamento no mobile.
* **Persistência de Dados (UX):** Formulários inteligentes que mantêm os dados digitados na tela utilizando propriedades `defaultValue` em cenários de falha na validação, prevenindo retrabalho de digitação por parte do usuário.

*This project was designed under strict software engineering standards to ensure top scores in __Google PageSpeed ​​Insights__:*

* *__Dynamic Internationalization (i18n):__ Scalable architecture based on Dynamic Routes (`/[lang]`), unifying the structural code for rendering in multiple languages ​​(PT-BR / EN) without component duplication.*
* *__Server Actions & Security:__ Form management using React's native `useActionState` hook. Sending emails via EmailJS is processed strictly on the server side (`"use server"`), hiding private keys and tokens from reverse engineering on the client.*
* *__Extreme Resource Optimization:__* 
    * *Complete removal of third-party scripts and heavy CDNs (such as injected fonts and Font Awesome scripts).*
    * *Using the native `next/font` package to self-host and optimize Google fonts locally during build, eliminating* Layout Shifts *(CLS) and reducing mobile loading times.*
* *__Data Persistence (UX):__ Intelligent forms that retain data entered on the screen using `defaultValue` properties in validation failure scenarios, preventing users from having to re-enter their data.*

---

## 🛠️ Como Executar Localmente | *How to Run Locally*

1. Clone este repositório:
   ```bash
   git clone https://github.com/giullianoth/portfolio.git
   ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Crie um arquivo ```.env.local``` na raiz do projeto e configure as chaves do seu serviço EmailJS:
    ```
    EMAILJS_SERVICE_ID=seu_service_id
    EMAILJS_TEMPLATE_ID=seu_template_id
    EMAILJS_PUBLIC_KEY=sua_public_key
    EMAILJS_PRIVATE_KEY=sua_private_key
    ```

4. Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

5. Abra http://localhost:3000 no seu navegador.

---


1. *Clone this repository:*
   ```bash
   git clone https://github.com/giullianoth/portfolio.git
   ```

2. *Install the project dependencies:*
    ```bash
    npm install
    ```

3. *Create a `.env.local` file in the project root and configure the keys for your EmailJS service:*
    ```
    EMAILJS_SERVICE_ID=your_service_id
    EMAILJS_TEMPLATE_ID=your_template_id
    EMAILJS_PUBLIC_KEY=your_public_key
    EMAILJS_PRIVATE_KEY=your_private_key
    ```

4. *Run the development server:*
    ```bash
    npm run dev
    ```

5. *Open http://localhost:3000 in your browser.*

---

## Autor | *Author*

Feito com :heart: por este cara sonhador:

*Made with :heart: by this dreamy guy:*

| <img src="https://avatars.githubusercontent.com/u/106249494?v=4" width="100px" style="border-radius: 50%"> **Giulliano Guimarães** |
| --- |
|[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/giullianoth) [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/giullianoth/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giullianoth/) [![GMail](https://img.shields.io/badge/Gmail-D14836?style=flat&logo=gmail&logoColor=white)](mailto:llthguimaraes@gmail.com) |
