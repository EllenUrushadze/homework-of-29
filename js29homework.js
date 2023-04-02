//N1 Hello text
let userFirstName = "Elene";
let welcomeMessage = `Welcome to our website, ${userFirstName}`;
console.log(welcomeMessage);

//N2 
let userBalance = 1125;
let cartTotal = 850;

if(userBalance >= cartTotal){
    console.log("You successfully bought the products");
}else{
    console.log("Sorry, your balance isnt enough, please add ${cartTotal - userBalance} more money to guy them");
}

//N3 Exam score
let maxScore = 40;
let barrier = 21;
let studentScore = 38;

if(studentScore >= barrier){
    console.log(`გილოცავთ, თქვენ გადალახეთ ${barrier} ქულიანი ბარიერი ${studentScore - barrier} ქულით`);
}else{
    console.log(`ვწუხვარ, თქვენ ვერ გადალახეთ ${barrier} ქულიანი ბარიერი ${barrier - studentScore} ქულით`);
}   

//N4 Delivery
let shippingIsPossible = false;

if(shippingIsPossible){
    console.log("თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არის");
}else{
    console.log(`თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არ არის`);
}


//N5 პოლიტკორექტული მისალმება-დამშვიდობების მექანიზმი
let userLoggedIn = true;
let userFirsttName = "Elene";
let userIsFemale = true;

if(!userLoggedIn){
    console.log("sorry, logged in at first");
}else{
    console.log(`სალამი, ქალბატონო, ${userFirsttName}`);
}

//N6 ChatGPT-ის ლიმიტომეტრი
let userQuestions = [
    "what color is the sky?",
    "what color is the sky?",
    "what color is the sky?",
    "what color is the sky?",
    "what color is the sky?",
    "what color is the sky?",
    "what color is the sky?",
    "what color is the sky?",
    "what color is the sky?",
    "what color is the sky?"
]

if(userQuestions[24]){
    console.log("შემდეგი კითხვის დასმას შეძლებთ 3 საათში");
}else{
    console.log("You can ask another question");
}

//N7 ფიტნეს აპლიკაცია
let userWeights = [57, 56, 56.5, 55.1, 54.9];
let goal = 52;

console.log(`შედეგის მიღწევამდე დაგრჩა ${userWeights[userWeights.length - 1] - goal } კილო`);

//N8 როგორ სწავლობს ჩემი ბიჭი?
let gigosTestResults = [77, 78, 81, 87, 85, 88, 88];

if( (gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[0]) < 10){
    console.log("რავიცი, ნიჭიერია, მაგრამ ზარმაცი");
}else{
    console.log("კარგი შვილი გყავთ, ქალბატონო, ნუ ნერვიულობთ");
}
if( gigosTestResults[gigosTestResults.length - 1] <= gigosTestResults[0] ){
    console.log("უხ, გიგო, გიგოოო");
}

//N9 როგორ სწავლობს ჩემი ბიჭი? ვერსია-2
//წინა ამოცანის მნიშვნელობები გამოვიყენე, ახალი ცვლადი რომ აღარ შემომეღო

if( gigosTestResults[gigosTestResults.length - 1] >= gigosTestResults[0]){
    console.log("არის მატების დინამიკა");
}


//N10 ეროვნულები
let gigosResults = [21, 45, 58, 71];

if(gigosResults[0] >= 25 && gigosResults[1] >= 25 && gigosResults[2] >= 25 && gigosResults[3] >= 25){
    console.log("ჩააბარა ყველა გამოცდა");
}else{
    console.log("ვერ ჩააბარა ყველა გამოცდა");
}

