
			/*This is the very first JavaScript comment I am making. I below will create a few variables and explain them with more comments.These will be divided into different groupings to understand
			 the Somali refugee population. I have given the number in the region, a title for this, some of the countries they go to, factors to consider both core and additional and some of the camps */

			/*This is a variable number list of the registered population in the hron of africa for Somali refugees */

			var RegisteredSomaliPopulationinHornAfrica = 888166;

			/*Below is a title of what this javascript is all about. "Somali refugees in neighboring countries and beyond" */

			var ThisiswhatIwanttocallthisvariable_itsthetitle = "Somali Refugees in Neighoring Countries and Beyond";

			/*This is a list of the different countries in the region that refugees go to */

			var NeighboringCountriesthatSomaliRefugeesMigrateTo = ["Kenya", "Ethiopia", "Djibouti", "Yemen", "Uganda"];

			/* Below is a bit tricky so I'll explain it: first we have an object of some of the core factors to consider in the case of Somali refugees, within that then I have a list of some of the camps that are of focus
			 after which I have also made an object within this object of other factors to consider in the case of Somali refugees such as most dangerous camp */

			var CoreFactorstoconsiderwhentheyliveinneighboringcountries = {
				"citythatrefugeessettlein" : "Nairobi",
				"aidagenciesthatworkwithSomalirefugees" : "UNHCR",
				"securitythreatthatexists" : "AlShabaab",
				"campsthatareinfocusinKenyaandotherpartsofthearea" : ["Dadaab", "Kakuma", "Holl-Holl", " Dollo Ado"],
				"otherimportantfactorstoconsiderforSomalirefugees" : {
					"politicalfactors" : "closure of Dadaab camp",
					"numberofhouseholds" : 130934,
					"countryofresettlement" : "USA",
					"most dangerous camp" : "IFO2"
				}
			};

			/* this boolean statement demonstrates a true fact about Somali refugees */
			var KenyahoststhelargestnumberofrefgueesfromSomalia = true;

			/*yay! I tried a console log and I think it works! console.log(["Kenya"], {"camps":"Dadaab"}); */

			/* The below is actualy a list of four distinct objects; these distinct objects are actuallys articles about Somali refugees followed by a brief breakdown of their features */

			var Thesourcesofmycontentandtheirvariousfeatures = [{
				"title" : "15,000 Somalis 'heartbroken' by Trump refugee ban",

				"source" : "USAToday",

				"url" : "http://www.usatoday.com/story/news/world/2017/01/31/somali-refugees-stranded-trump-travel-ban/97294230/",

				"summary" : "The policy by President Trump to suspend the US asylum program is affecting Somali refugees in the Dadaab camp in Kenya. According to the UN, 26000 refugees in Kenya were in the process of resettlement of which 14,500 were from Dadaab. This included a 25 year old, Ahmed Ismail Shafat who was born in Dadaab and went through a ten-year vetting process for the US. As the future of the Dadaab, the world’s largest refugee camp is uncertain, this is a worry for Somali refugees trying to get to the US."
			}, {
				"title" : "The Other Refugee Crisis",

				"source" : "NYTimes",

				"url" : "https://www.nytimes.com/2015/10/10/opinion/the-other-refugee-crisis.html?_r=1",

				"summary" : "The Dadaab refugee camp was established in 1991 as a temporary camp for Somali refugees who were escaping its civil wa. Since then it has become the largest refugee camp. It is home to half a million occupants, of which 400,000 are of Somali refugees. The life in Dadaab is challenging for refugees who face a host of challenges. It is one of the many “temporary but permanent cities”. This article discusses the plight of life in Dadaab and how refugees live."
			}, {
				"title" : "Kenya:Somali Refugees Must Not Be Forcibly Returned from Dadaab",

				"source" : "Doctors Without Borders",

				"url" : "http://www.doctorswithoutborders.org/article/kenya-somali-refugees-must-not-be-forcibly-returned-dadaab",

				"summary" : "According to Doctors Without Borders, in 2015, Kenyan officials were pushing for the forceful return of Somali refugees in the Dadaab camp in Kenya. MSF believes that despite the poor conditions at Dadaad, it is still better than the life that these refugees would have in Somalia. They stated the need for the Kenyan government and international community to provide stronger protections for these refugees."
			}, {
				"title" : "UN: Somali refugee crisis is killing children",

				"source" : "Yahoo",

				"url" : "https://www.yahoo.com/amphtml/news/un-somali-refugee-crisis-killing-children-111216377.html",

				"summary" : "As refugees from Somalia arrived in Dadaab, many of them were to frail and hungry to survive. In other situations many did not even survive the journey to these camps. This was in the face of the droughts that hit East Africa in 2011. There were estimates that a quarter of the Somali population is uprooted. This article highlights the impact this was having on children who were fleeing Somalia as refugees."
			}];
			function IDNYTimes(listofArticles) {

				/*Goal: to go through all the objects in the list above and be able to send a message to the console on Chrome everytime I find one that was published on USAToday */
				for (var counter = 0; counter < listofArticles.length; counter++) {
					console.log(listofArticles[counter]);
/*now I am making an if systems to test if an article has "USAToday" as the source property. If it does, print the object and if not print "ThisisnotUSAToday" */
				/*Below is the recent articles counter that I will then sort */
					var recentarticles = listofArticles[counter];
					/* The first part of the code is 'if' the source is USA Today */
					if (recentarticles.source == "USAToday") /*I have logged it */{
						console.log(recentarticles);
					} /*And now I check if there is not USA today */
					else {
						console.log("ThisisnotUSAToday");
					}

				}

				/* I have then console logged it */
				console.log("loops are complete!");
			}

			/* Call my newly created function */
			/*calling it with my firs list */
			console.log("Calling with first list");
			IDNYTimes(Thesourcesofmycontentandtheirvariousfeatures);
			/*calling it with my second list */




		