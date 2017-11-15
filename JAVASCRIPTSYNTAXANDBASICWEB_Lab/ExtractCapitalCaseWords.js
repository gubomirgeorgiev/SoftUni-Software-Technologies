function getCCaseWords(input) {
 let inputArr = input.join(",");
 let splitWordsArr = inputArr.split(/\W+/).filter(x=>x.toUpperCase()===x&&x.length>0);
 let output = splitWordsArr.join(", ", x=>x).replace(/, $/,'');
 console.log(output);
}

getCCaseWords(['We start by HTML, CSS, JavaScript, JSON and REST.',
'Later we touch some PHP, MySQL and SQL.',
'Later we play with C#, EF, SQL Server and ASP.NET MVC.',
'Finally, we touch some Java, Hibernate and Spring.MVC.']);
