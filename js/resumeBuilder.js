/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Richard Morgan");

//var awesome = "  Rick is the greatest programmer alive!";

//console.log(awesome);

//var moreAwesome =
//    awesome.replace("alive", "of all-time");

//console.log(moreAwesome);

//$("#main").append(moreAwesome);

// couple of different ways to create and reference objects:::::::::::

// var work = {};
// work.position = "my position";
// work.employer = "my employer";
// work.years = 3;

// $("#main").append(work["position"]);
// $("#main").append(work.employer);

// var education = {};
// education["name"] = "my education";
// education["years"] = "6";
// education["city"] = "many";

// $("#main").append(education.name);
// $("#main").append(education["years"]);

// could have done this way using JSON:::::::::::::::

// var education = {
//     "schools": [
//     {
//         "name" : "some college",
//         "city" : "some city",
//         "degree" : "some degree",
//         "major" : ["major1", "major2"]
//     },
//     {
//         "name" : "second college",
//         "city" : "second city",
//         "degree" : "second degree",
//         "major" : ["second major"]
//     }
// ]};

// this is where the real resume begins:::::::::::::::::
var bio = {
   "name" : "Richard P. Morgan",
   "role" : "Progressive Web Developer",
//here's some cool JSON stuff::::::::::::::::::::::::::
   "contacts" : {
    "mobile": "432-664-5266",
    "email": "mba.rick@gmail.com",
    "linkedin": "linkedin.com/aggie93",
    "location": "Midland, TX"
},
   "welcomeMessage" : "Meet Rick - He's transitioning from RockStar to Progressive Web Developer.",
// and another JSON trick :::::::::::::::::::::::::::
   "skills" : [
        "HTML", "css", "JavaScript", "SQL", "Python", "Chart.js", "D3.js", "Rhythm & Lead Rock Guitar!"
        ],
    "bioPic": "images/rpm4.png\" onmouseover=\"this.src='images/rpm5.png'\" onmouseout=\"this.src='images/rpm4.png'"
}
// just for fun I made the image line above using this html template::::::::::
    // <img src="images/rpm.jpg"
    //      onmouseover="this.src='images/rpm2.jpg';"
    //      onmouseout="this.src='images/rpm.jpg';">
    // </img>

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

// this works, but not as well
// var formattedContact = "";
// for (contact in bio.contacts) {
// formattedContact += HTMLcontactGeneric.replace("%contact%",contact).
//                                        replace("%data%", bio.contacts[contact]);
// }

/*for (contact in bio.contacts) {
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
}*/


var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);

$("#topContacts").prepend(formattedMobile, formattedEmail, formattedLinkedin);
$("#footerContacts").prepend(formattedMobile, formattedEmail, formattedLinkedin);

var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedRole).prepend(formattedName).append(formattedPicture,formattedWelcome);

$("#header").append(HTMLskillsStart);
// this worked...
if (bio.skills.length > 0 ){
for (skill in bio.skills){
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkills);
    }
}

      var ctx = document.getElementById("myChart").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'polarArea',
        options: {scaleFontColor: "#fff"},
        data: {
          labels: ["HTML", "CSS", "JavaScript", "SQL", "Python", "Chart.js", "D3.js"],
          datasets: [{
            backgroundColor: [
              "#2ecc71",
              "#3498db",
              "#95a5a6",
              "#9b59b6",
              "#f1c40f",
              "#e74c3c",
              "#34495e"
            ],
            data: [18, 15, 25, 20, 23, 14, 10]
          }]
        }
      });

var work = {
    "jobs": [
    {
        "employer" : "ATOMUS GAMES",
        "title" : "Business Development Manager / Software Developer",
        "dates" : "Aug 2015-Present",
        "location" : "Midland, TX",
        "description" : `Custom mobile app design & publishing business with
        a globally distributed 8-person development team catering to oil field
        related service companies such as OmniCompressedAir.com.
        <div class="firsty">
        <li> Authored and published multiple Unity3D mobile applications on Google Play,
            iTunes, and Amazon </li>
        <li> Interviewed clients for UX/UI design and implementation, provided user training,
            collected feedback </li>
        <li> Collaborated remotely with distributed development team, assigned action-items,
            review progress, and set goals
        </li></div>`,
    },
    {
        "employer" : "NOVELTY SIGNS WHOLESALE",
        "title" : "Owner / Business Development Manager",
        "dates" : "1999-Present",
        "location" : "Midland, TX",
        "description" : `A niche products marketing/manufacturing company with 4 employees and over $4m
            in total revenues with eBay, Amazon, and various distributors world-wide such as
            MyPetChicken.com, MannLakeLtd.com, and many more.
        <div class="firsty">
        <li> Managed Amazon eBay sales channels – inventory database, copy writing, order fulfillment,
            customer service </li>
        <li> Awarded by eBay CEO Meg Whitman (in person) as top 100 seller in 2001</li>
        <li> Recognized by Amazon as a top-performing associate in 2011 and 2012</li>
        </div>`,
    },
    {
        "employer" : "H&E EQUIPMENT SERVICES, INC.",
        "title" : "Territory Manager",
        "dates" : "Sep 2014-Mar 2015",
        "location" : "Odessa, TX",
        "description" : `Publicly traded (NYSE: HEES) Full-service construction equipment provider
            founded in 1961 with more than 2k employees and over $1b annual revenue.
        <div class="firsty">
        <li> Provided outstanding customer service to new and repeat business H&E customers across
            10,000mi territory</li>
        <li> ARecognized by Branch Manager - “I’ve never had an employee that worked as hard as Rick did.”</li>
        </div>`,
    },
    {
        "employer" : "HARLEY-DAVIDSON",
        "title" : "General Manager",
        "dates" : "1996-1999",
        "location" : "Odessa, TX",
        "description" : `Motorcycle dealership with 12 employees and over $2m in annual revenues.
        <div class="firsty">
        <li> Expanded facility and increased revenues 200%</li>
        <li> Recognized as top seller for having the highest one-year increase in extended warranty sales nationwide</li>
        <li> Awarded Harley-Davidson Motor Co. Bar & Shield for outstanding dealership performance</li>
        </div>`,
    },

],
    "volunteerJobs": []
};

// old way usin for in :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/*for (job in work.jobs) {
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%data%", work.jobs[job].title);

    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $("#workExperience").append(HTMLworkStart, formattedEmployer, formattedDate, formattedLocation, formattedDescription);
}*/

$.each(work.jobs, function displayWork(job, value) {
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("%data%", work.jobs[job].title);
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployer, formattedDate, formattedLocation, formattedDescription);
})

function inName(oldName) {

    names = oldName.trim().split(" ");
    names[names.length-1] = names[names.length-1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    var finalName = names.join(" ");

    return finalName;
}
console.log(inName(bio.name));

var projects = {
    "project":[
    {
        "title":"OmniCalc",
        "dates":"2016",
        "description": `Pipeline service management Unity3D mobile app utility
        written in C#.  Worked with development team: designed requirements,
        developed and distributed final, maintained current build.  Praised
        as a “game-changer” in the field and has been widely adopted within
        the industry.`,
        "image": "images/calc.jpg",
    },
    {
        "title":"OmniInject",
        "dates":"2016",
        "description": `Concentric String Injection visualizer.  Designed to
        demonstrate the effectiveness of nitrogen injection for increasing
        down-hole fluid dynamics.  Project resulted in increased business
        for Omni by demonstrating the process in an interactive fashion.`,
        "image": "images/inject.jpg",
    }]
};

$.each(projects.project, function displayProjects(project, value) {
    var formattedProject = HTMLprojectTitle.replace("%data%", projects.project[project].title);
    var formattedDate = HTMLprojectDates.replace("%data%", projects.project[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
    var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].image);
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedProject, formattedDate, formattedDescription, formattedImage);
});

var education = {
    "schools" : [
    {
        "name": "Texas A&M University",
        "degree": "MBA",
        "dates": "1991-1993",
        "location": "College Station, TX",
        "major": "Management Information Systems",
    },
    {
        "name": "University of Texas of the Permian Basin",
        "degree": "BBA",
        "dates": "1989-1991",
        "location": "Odessa, TX",
        "major": "Marketing",
    }
    ]
};

$.each(education.schools, function displaySchools(schools, value) {
    var formattedName = HTMLschoolName.replace("%data%", education.schools[schools].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor);
});

var onlineClasses = {"classes": [
    {
        "title": "Full Stack Nanodegree",
        "school": "Udacity",
        "dates": "Dec 2016 - Mar 2017",
        "url": "udacity.com"
    }
]};

$.each(onlineClasses.classes, function displayClasses(classes, value){
    var formattedTitle = HTMLonlineTitle.replace("%data%", onlineClasses.classes[classes].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", onlineClasses.classes[classes].school);
    var formattedDates = HTMLonlineDates.replace("%data%", onlineClasses.classes[classes].dates);
    var formattedURL = HTMLonlineURL.replace("%data%", onlineClasses.classes[classes].url);
//    $("#education").append(HTMLonlineClasses);
//    $(".online-entry:last").append(formattedTitle, formattedSchool, formattedDates, formattedURL);
});

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);