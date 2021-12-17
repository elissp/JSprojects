XML stands for extensible markup language. A markup language is a set of codes, or tags, that describes the text in a digital document.
 XML, a more flexible cousin of HTML, makes it possible to conduct complex business over the Internet.
 XML, by contrast, lets you create your own tags to label the meaning or use of data
 Simple Rules for the creation.
 Every single xml document needs a root element to nest the others elements inside.You can use your own parent element root here used conventionally
<?xml version="1.0" encoding="UTF-8"?>
The above code is called  XML prolog and cares about the encoding.Is optionally but in some cases international chars, throws error without this definition
All XML Elements Must Have a Closing Tag
XML Tags are Case Sensitive

META DATA/CDATA
 <root>
  <BookCredentials id='1'>This is a js book</Book>
  </BookCredentials>
</root>

There are 5 pre-defined entity references in XML:

&lt;	<	less than
&gt;	>	greater than
&amp;	&	ampersand 
&apos;	'	apostrophe
&quot;	"	quotation mark

XML use's AJAX for  asynchronous calls and XHTTP Requests such as

  var xhttp = new XMLHttpRequest();

  