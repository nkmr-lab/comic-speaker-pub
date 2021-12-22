import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg">
       <Navbar.Brand style={{color: "#ffffff"}}>セリフ発話者データセット配布サイト</Navbar.Brand>
      </Navbar>
      <Container>
        <Row style={{padding: "2em 0rem 1em"}}>
          <div>
          <h1>概要</h1>
          <p>
            本データセットは<a href="http://www.manga109.org" target="_blank">Manga109</a>の漫画に登場するセリフに対して発話者であるキャラクタのアノテーション情報を収集したものです．
            漫画のアノテーションを付与するための<a href="https://exam-speaker.nkmr.io/demo/" target="_blank">システム</a>により，
            109冊の漫画に登場する147,918件のセリフに対して2名のデータ収集者が発話者となるキャラクタとの対応付を行なったものになります．
            {/* <br/> */}
            なお，実際の漫画画像およびその他のアノテーション情報についてはManga109のデータ配布サイトよりダウンロードして下さい．
          </p>
          </div>
        </Row>
        <Row style={{padding: "1em 0em"}}>
          <div>
          <h1>ダウンロード</h1>
          <p>
            以下のリンクからダウンロードできます<br/>
            <ul>
              <li><a href="https://nkmr.io/comic/speaker-dataset/Comic-Speaker-Dataset.tar.gz">Comic-Speaker-Dataset.tar.gz</a></li>
            </ul>
          </p>
          </div>
        </Row>
        <Row style={{padding: "1em 0em 0em"}}>
          <div>
          <h1>データ内容</h1>
          データセットには2種類のcsvファイルがあります．
          </div>
        </Row>
        <Row>
          <ui><li style={{fontWeight: "bold", fontSize: "1.2em", padding: "0.5em 0em"}}>annotation.csv</li></ui>
        </Row>
        <Row>
          
          <Col lg={{span: 8, offset: 2}}>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>title</th>
                  <th>index</th>
                  <th>text_id</th>
                  <th>character_id</th>
                  <th>annotator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ARMS</td>
                  <td>2</td>
                  <td>00000001</td>
                  <td>00000003</td>
                  <td>033</td>
                </tr>
                <tr>
                  <td>ARMS</td>
                  <td>2</td>
                  <td>00000001</td>
                  <td>00000003</td>
                  <td>044</td>
                </tr>
                <tr>
                  <td>WarewareHaOniDearu</td>
                  <td>24</td>
                  <td>00079bf6</td>
                  <td>000797dd</td>
                  <td>038</td>
                </tr>
                <tr>
                  <td>WarewareHaOniDearu</td>
                  <td>24</td>
                  <td>00079bf6</td>
                  <td>99999999</td>
                  <td>033</td>
                </tr>
                <tr>
                  <td>Akuhamu</td>
                  <td>32</td>
                  <td>00003567</td>
                  <td>00002d03</td>
                  <td>015</td>
                </tr>
              </tbody>
            </Table>
            <div style={{textAlign: "center", fontWeight: "bold"}}>.<br/>.<br/>.</div>
            <ui style={{listStyleType: "circle"}}>
              <li>title: 漫画のタイトル</li>
              <li>index: セリフが登場するページ</li>
              <li>text_id: セリフのID</li>
              <li>character_id: 発話者であるキャラクタのID</li>
              <li>annotator: アノテーション付与者のID</li>
            </ui>
          </Col>
        </Row>
        <Row style={{padding: "0.5em 0em"}}>
          セリフと発話者であるキャラクタを対応付けたデータになります．"text_id"および"character_id"は，Manga109に含まれるアノテーションと対応しています．
          1つのセリフには2名のアノテーション付与者がいます．
          また，1つのセリフに複数のキャラクタが対応付けられていることもあります．
          <br/><span style={{color: "#ff0000"}}>※キャラクターのIDには　不明："99999999"，ナレーション："11111111"，その他："000other"　の3つのIDが追加されています．</span>
        </Row>
        <Row style={{padding: "0em 0em 1em"}}>
          
        {/* <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>annotator</th>
                  <th>title</th>
                  <th>total_tasks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>033</td>
                  <td>ARMS</td>
                  <td>1064</td>
                </tr>
                <tr>
                  <td>033</td>
                  <td>AosugiruHaru</td>
                  <td>1361</td>
                </tr>
                <tr>
                  <td>035</td>
                  <td>EvaLady</td>
                  <td>1508</td>
                </tr>
              </tbody>
            </Table>
          </Col> */}
          <div>
          <ui><li style={{fontWeight: "bold", fontSize: "1.2em", padding: "0.5em 0em"}}>list.csv</li></ui>
            アノテーション付与者が担当した作品のリストになります．
            3列目の"total_tasks"はその作品に対するアノテーション付与の合計回数になります．
          </div>
        </Row>
        <Row style={{padding: "1em 0em"}}>
          <div>
            <h1>文献</h1>
            <p>本データセットを使用した論文を執筆される際には，下記文献を引用ください．</p>
            <ul>
            <li>阿部 和樹, 中村 聡史. コミックのセリフと発話者対応付けデータセットの構築とその困難性, 第3回 コミック工学研究会, pp.7-12, 2020.</li>
            </ul>
          </div>
        </Row>
        <Row style={{padding: "1em 0em"}}>
          <div>
            <h1>リンク</h1>
            <ui>
              <li><a href="http://www.manga109.org" target="_blank">Manga109 - Japanese Manga Dataset -</a></li>
              <li><a href="https://dl.nkmr-lab.org/papers/208" target="_blank">漫画における台詞発話者の自動判定に向けた技術的困難性による整理とデータセット構築手法の検討 - 明治大学 中村聡史研究室 論文レポジトリ</a></li>
              <li><a href="https://exam-speaker.nkmr.io/demo" target="_blank">発話者アノテーション付与・デモページ</a></li>
            </ui>
          </div>
        </Row>
        <Row style={{padding: "1em 0em"}}>
          <div style={{textAlign: "center"}}>
            明治大学総合数理学部 <a href="nkmr-lab.org" target="_blank">中村研究室</a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
