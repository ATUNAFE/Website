import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import logo from '../images/LogoTunafe.png'

const AboutUs = () => (
  <Layout>
    <Seo title="AboutUs" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <section className="Historial">

      <div>
        <h2>Historial</h2>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, paddingRight: '20px'}}>
          <img style={{ width: '100%', height: 'auto' }} src={logo} />
        </div>
        <div style={{ flex: 2 }}>
          <p>A Tuna Feminina de Engenharia da Universidade do Porto foi fundada a 3 de Novembro de 1991+1 por um grupo de alunas da Faculdade de Engenharia da Universidade do Porto que tinham em comum o gosto pela música e pela boémia estudantil . Constituída por alunas dos vários cursos ministrados na FEUP, a TUNAFE conjuga o respeito pela tradição Académica com a alegria em fazer música e irreverência estudantil . Repre-
senta para todos os elementos desta Tuna uma oportunidade de crescimento pessoal e um escape para uma vida universitária por vezes tão exigente.

Desde a sua estreia no V Sarau Cultural de Engenharia , a TUNAFE já percorreu todo o país cantando e encantando quem a escuta , dignificando o bom nome da Faculdade de Engenharia e da Cidade do Porto. Para além das inúmeras viagens em Portugal, a TUNAFE tem, nos últimos anos, ultrapassando fronteiras, realizan-
do digressões por toda a Europa. Estas são fruto de muito trabalho e dedicação , com o objetivo de partilhar a alegria de ser estudante e difundir a cultura portuguesa por onde passa. Desde a primeira digressão em Setembro de 1999 aoArquipélago da Madeira, aTUNAFE cantou e encantouem destinos como Alemanha,Áustria, Holanda,Inglaterra, Liechenstein,Açores, Suíça, Bélgica,Espanha e França.

Após doze edições do seu festival, a TUNAFE decidiu voar mais alto e aventurar-se na organização do seu XIII Tudo Isto É Tuna no Coliseu do Porto , sendo a primeira Tuna Feminina a conseguir algo de tão gratificante. Mas não se ficou por aqui, a TUNAFE continuou com muito orgulho a realizar mais edições do Tudo Isto É Tuna em salas emblemáticas na nossa cidade Invicta.

Acima de qualquer norma ou regra é essencial a paixão pelo conjunto que a tuna representa : a vida académica , música , boémia e, especialmente , os pequenos gestos que vão solidificando as amizades encontradas a partir de um gosto comum, a exaltação à alegria de ser estudante – estudante da Faculdade de Engenharia da Universidade do Porto.

É este o espírito vivido na Tuna Feminina de Engenharia e que marcou todas as suas gerações. Ousamos então usufruir do direito de citar tão sábias palavras.

'“Se, ser estudante, é ter ânsia em saber e espírito jovem, ser tuno será exaltar em música e canto o ânimo de ser estudante e o vigor da juventude , virtudes a deverem ser permanentes e sem idade!”</p>
        <p>- Aureliano da Fonseca</p>
        </div>
      </div>

    </section>
  </Layout>
)

export default AboutUs
