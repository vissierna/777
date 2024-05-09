async function loadXMLFile() {
  try {
    const response = await fetch('lab.xml');
    const xmlstr = await response.text();

    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xmlstr, "text/xml");

    // Остальной код для обработки xmlDoc

  } catch (error) {
    console.error('Ошибка при загрузке файла:', error);
  }
}

loadXMLFile();

let parser=new DOMParser();
xmlDoc=parser.parseFromString(xmlstr, "text/xml");
document.write("<tr>");
document.write("<td>",xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue,"</td>");
document.write("<td>",xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue,"</td>");
document.write("<td>",xmlDoc.getElementsByTagName("art")[0].childNodes[0].nodeValue,"</td>");
document.write("<td>",xmlDoc.getElementsByTagName("buy")[0].childNodes[0].nodeValue,"</td>");
document.write("<td>",xmlDoc.getElementsByTagName("atribut")[0].childNodes[0].nodeValue,"</td>");
document.write("<td>",xmlDoc.getElementsByTagName("creator")[0].childNodes[0].nodeValue,"</td>");
document.write("<td>",xmlDoc.getElementsByTagName("material")[0].childNodes[0].nodeValue,"</td>");
document.write("</tr>");