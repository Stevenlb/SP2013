<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js" type="text/javascript"></script>
<script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js" type="text/javascript"></script>
<script src="https://code.jquery.com/jquery-2.1.4.min.js" type="text/javascript"></script>

<div id="ResultDiv">TEST</div>
 <script type="text/javascript">
 $(document).ready(function () { executeCaml(); });
 var InnrHtmlgrp = "";
 function executeCaml() {
 var soapEnv =
 "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/'>" +
 "<soapenv:Body><GetListItems xmlns='http://schemas.microsoft.com/sharepoint/soap/'>" +
 "<listName>Posts</listName>" +
 "<View><RowLimit>6</RowLimit><Query><RowLimit>6</RowLimit><Where><And><Leq><FieldRef Name='PublishedDate' /><Value IncludeTimeValue='TRUE' Type='DateTime'>2024-04-22T16:00:07Z</Value></Leq><Or><Contains><FieldRef Name='News_x0020_Text' /><Value Type='Text'>HCL Industry News</Value></Contains><And><Leq><FieldRef Name='PublishedDate' /><Value IncludeTimeValue='TRUE' Type='DateTime'>2024-04-22T16:00:08Z</Value></Leq><Contains><FieldRef Name='News_x0020_Text' /><Value Type='Text'>MedPro News</Value></Contains></And></Or></And></Where><OrderBy><FieldRef Name='Featured' Ascending='False' /><FieldRef Name='PublishedDate' Ascending='False' /><RowLimit>6</RowLimit></OrderBy><RowLimit>6</RowLimit></Query><RowLimit>6</RowLimit></View><RowLimit>6</RowLimit>" +
 "</GetListItems>" +
 "</soapenv:Body></soapenv:Envelope>";
 $.ajax({
 url : _spPageContextInfo.webAbsoluteUrl + "/sites/newnewscenter/_vti_bin/lists.asmx",
 contentType : "text/xml; charset=\"utf-8\"",
 method: "POST",
 dataType: "xml",
 data: soapEnv,
 complete: processResult,
 //success : processResult,
 error: onError
 });
 }
 function processResult(xData, status) {
 var itemTitle = "<br>";
 $(xData.responseXML).find("z\\:row").slice(0, 1).each(function () {
	var guid = $(this).attr("ows_UniqueId");
	var title = $(this).attr("ows_Title");
	var dueDate = $(this).attr("ows_DueDate");
	itemTitle += title + "<br>"
 });
 itemTitle += "<br>";
 $('#ResultDiv').html(itemTitle);
 }
 function onError(data, errorStatus, errorMessage) {
 alert("error");
 alert(errorMessage);
 }
 </script>
 
 
 
 
