PennController.ResetPrefix( null );
AddHost("https://amor.cms.hu-berlin.de/~idslfahm/ibex_bilder/");
PennController.InitiateRecorder( "https://amor.cms.hu-berlin.de/~idslfahm/recordings/Recording.php").label( "init" );
PennController.DebugOff()



PennController.Sequence("init", "intro", "PersonalData", "intro2", "familiarization_start", "familiarization", "practice_one_start", randomize("practice_one"), "practice_two_start", randomize("practice_two"), "main_start",  "main_SOA100ms", "break", "main_SOA-100ms", "break","main_SOA0ms",  "send", "end" ) //order of main blocks can be changed here
//         "intro", "familiarization_start", "familiarization", "practice_one_start", randomize("practice_one"), "practice_two_start",

//CheckPreloaded(startsWith("Picture"))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Introduction HTML


PennController("intro",

             newHtml("intro", "example_intro.html")
             .print()

             ,

             newCanvas("space1", 1, 125)
             .print()

             ,

             newButton("weiter", "weiter")
             .center()
             .print()
             .wait()


    )

    .setOption("hideProgressBar", "true")
    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Clickworker ID


PennController("PersonalData",



               newText("EnterData", "Zun&auml;chst ein paar Angaben zu deiner Person!")
               .settings.css("font-size", "large")
               .print()

               ,

               newCanvas("space1", 1, 10)
               .print()

               ,

               newText("EnterData2", "<b>Du musst erst alle Angaben machen, bevor du auf <i>weiter</i> klickst, da das Experiment sonst abgebrochen wird!</b>")
               .settings.css("font-size", "18px")
               .print()

               ,

               newCanvas("space2", 1, 10)
               .print()

               ,

               newTextInput("ID", "")
               .settings.log()

               ,

               newText("IDtext", "Clickworker ID:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("IDcanvas", 600, 45)
               .add(0, 20, getText("IDtext"))
               .add(200, 23, getTextInput("ID"))
               .print()

               ,

               newDropDown("language", "")
               .settings.log("last")
               .add( "Deutsch" , "Deutsch und andere Sprache(n) vor dem 5.Lebensjahr" , "andere" )

               ,

               newText("languagetext", "Muttersprache:")
               .settings.css("font-size", "18px")

               ,


               newCanvas("languagecanvas", 600, 35)
               .add(0, 20, getText("languagetext"))
               .add(200, 23, getDropDown("language"))
               .print()

               ,

               newDropDown("gender", "")
               .settings.log("last")
               .add( "weiblich" , "m&auml;nnlich" , "divers" )

               ,

               newText("gendertext", "Geschlecht:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("gendercanvas", 600, 35)
               .add(0, 20, getText("gendertext"))
               .add(200, 23, getDropDown("gender"))
               .print()

               ,


               newDropDown("age", "")
               .settings.log("last")
               .add( "17 oder j&uuml;nger" , "18" , "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33 oder &auml;lter" )

               ,

               newText("agetext", "Alter:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("agecanvas", 600, 35)
               .add(0, 20, getText("agetext"))
               .add(200, 23, getDropDown("age"))
               .print()

               ,

               newDropDown("browser", "")
               .settings.log("last")
               .add( "Safari" , "Firefox" , "Chrome", "Internet Explorer", "Microsoft Edge", "anderer" )

               ,

               newText("browsertext", "Verwendeter Browser:")
               .settings.css("font-size", "18px")

               ,

               newCanvas("browsercanvas", 600, 35)
               .add(0, 20, getText("browsertext"))
               .add(200, 23, getDropDown("browser"))
               .print()

               ,

               newCanvas("space3", 1, 155)
               .print()

               ,

               newButton("weiter", "weiter")
               .settings.center()
               .print()
               .wait(getDropDown("age")
                     .test.selected("18")
                     .or( getDropDown("age")
                        .test.selected("19")
                        .or( getDropDown("age")
                           .test.selected("20")
                           .or( getDropDown("age")
                             .test.selected("21")
                             .or( getDropDown("age")
                               .test.selected("22")
                               .or( getDropDown("age")
                                 .test.selected("23")
                                 .or( getDropDown("age")
                                   .test.selected("24")
                                   .or( getDropDown("age")
                                     .test.selected("25")
                                     .or( getDropDown("age")
                                       .test.selected("26")
                                       .or( getDropDown("age")
                                         .test.selected("27")
                                         .or( getDropDown("age")
                                           .test.selected("28")
                                           .or( getDropDown("age")
                                            .test.selected("29")
                                            .or( getDropDown("age")
                                              .test.selected("30")
                                              .or( getDropDown("age")
                                                .test.selected("31")
                                                .or( getDropDown("age")
                                                  .test.selected("32")
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )
                                                  )// ende age scale


                     .and(getDropDown("language")
                       .test.selected("Deutsch")
                       .or(getDropDown("language")
                         .test.selected("Deutsch und andere Sprache(n) vor dem 5.Lebensjahr")

                          )
                          ) //ende language scale

                     .and(getDropDown("gender")
                       .test.selected("m&auml;nnlich")
                       .or(getDropDown("gender")
                         .test.selected("weiblich")
                         .or(getDropDown("gender")
                           .test.selected("divers")
                          )
                          )
                          ) //ende gender scale

                      .and(getDropDown("browser")
                        .test.selected("Safari")
                        .or(getDropDown("browser")
                          .test.selected("Firefox")
                          .or(getDropDown("browser")
                            .test.selected("Chrome")
                            .or(getDropDown("browser")
                              .test.selected("Internet Explorer")
                              .or(getDropDown("browser")
                                .test.selected("Microsoft Edge")
                                .or(getDropDown("browser")
                                  .test.selected("anderer")
                           )
                           )
                           )
                           )
                           )
                           ) //ende browser scale


                      .and(getTextInput("ID")
                        .test.text(/^\d+$/)
                           )



                     .success()
                     .failure(

                         getButton("weiter")
                         .remove()
                         ,
                         newText("bye", "Du kannst leider nicht an dem Experiment teilnehmen, da deine Angaben nicht mit denen bei Clickworker &uuml;bereinstimmen oder du nicht alle Angaben eingegeben hast.")
                         .color("red")
                         .print()

                             ) //ende failure

                    ) // ende wait

               ,

               newVar("ID")
               .settings.global()
               .set( getTextInput("ID") )

               ,

               newVar("gender")
               .settings.global()
               .set( getDropDown("gender") )

               ,

               newVar("age")
               .settings.global()
               .set( getDropDown("age") )

               ,

               newVar("language")
               .settings.global()
               .set( getDropDown("language") )

               ,

               newVar("browser")
               .settings.global()
               .set( getDropDown("browser") )

     )

    .setOption("hideProgressBar", "true")
    .log( "ID" ,       getVar("ID"))
    .log( "gender" ,   getVar("gender"))
    .log( "age" ,      getVar("age"))
    .log( "language" , getVar("language"))
    .log( "browser" ,  getVar("browser"))


    ;



////////////////////////////////////////////////////////////////////////////////////////////////////////////// Intro 2 html
PennController("intro2",

               newHtml("intro2", "intro2.html")
               .settings.log()
               .print()

               ,

               newCanvas("space", 1, 205)
               .print()

               ,

               newButton("weiter", "weiter")
               .center()
               .print()
               .wait(getHtml("intro2").test.complete().failure( getHtml("intro2").warn()))

    )

    .setOption("hideProgressBar", "true")
    .log( "ID"            , getVar("ID"))

    ;


///////////////////////////////////////////////////////////////////////////////////////////////////////////// Familiarization -> alle Bilder darunter der Begriff passend zum Wort

PennController("familiarization_start",

               newText("familiarization_instr", "Zun&auml;chst zeigen wir dir alle Bilder, die sp&auml;ter in dem Experiment vorkommen. Unter jedem Bild wird der Begriff stehen, mit dem du das Bild sp&auml;ter benennen sollst (z.B. &quot;Auto&quot;, wenn das Bild ein Auto zeigt). Betrachte die Bilder deshalb bitte aufmerksam und versuche dir die dazugeh&ouml;rigen Begriffe zu merken!")
               .settings.css("font-size", "large")

               ,

               newText("leertaste", "Sobald ein Bild verschwindet, kannst du dich mit der Leertaste zum n&auml;chsten Bild klicken." )
               .settings.css("font-size", "large")
               ,

               newText("familiarization_start2", "Klicke <i>weiter</i>, um zu beginnen!")
               .settings.css("font-size", "large")

               ,


               newCanvas("text_fam", 800, 400)
               .add(60,0, getText("familiarization_instr"))
               .add(60, 80, getText("leertaste"))
               .add(300, 180, getText("familiarization_start2"))
               .print()


               ,

               newButton("weiter", "weiter")
               .center()
               .print()
               .wait()

    )

    .setOption("hideProgressBar", "true")

    ;


//////////////////////////////////////////////////////////////////////

PennController.Template("uebung.csv", variable =>

              PennController("familiarization",


              newImage("Picture", variable.Pic)
              .size(300, 300)

              ,

              newCanvas("PicWord", 300, 400)
              .add(0, 0, getImage("Picture"))
              .add(100, 350, newText("Wort", variable.Word).settings.css("font-size", "40px").settings.css("font-family", "Times New Roman") )
              .print()

              ,

              newTimer("presentpic", 2000)
              .start()
              .wait()

              ,

              getCanvas("PicWord")
              .hidden()

              ,

              newCanvas("empty3", 1, 20)
              .print()

              ,

              newButton("weiter", "weiter")
              .center()
             // .print()

              ,

              newSelector("button")
             // .disableClicks()
              .add(getButton("weiter") )
              .settings.keys(     " "                   )
              .wait()

           /*   newButton("weiter", "weiter")
              .center()
              .print()
              .wait()

*/
    )

    .setOption("hideProgressBar", "true")

    .log( "Picture"       , variable.Pic )
    .log( "Word"          , variable.Word )
    .log( "Cond"          , variable.Cond )
    .log( "ID"            , getVar("ID"))
    .log("Distractor", variable.Unr_Distractor)
    );


///////////////////////////////////////////////////////////////////////////////////////////////////////////// Uebung 1 -> alle Bilder benennen (ohne zusaetzliches Wort)

PennController("practice_one_start",

               newText("practice_one_instr", "Im folgenden Abschnitt wirst du die Bilder von eben noch einmal sehen. Dieses Mal sollst du die Bilder  so schnell wie m&ouml;glich benennen. Verwende dazu die Begriffe, die dir eben zusammen mit den Bildern gezeigt wurden! Zum Beispiel sagst du &quot;Rock&quot;, wenn das Bild einen Rock zeigt.")

               ,

               newText("leertaste", "Sobald die Aufnahme endet, kannst du dich mit der Leertaste zum n&auml;chsten Bild klicken." )
               .settings.css("font-size", "large")

               ,

               newText("practice_one2", "Klicke <i>weiter</i>, um zu beginnen!")

               ,

               newCanvas("empty", 800, 400)
               .add(60,0, getText("practice_one_instr").settings.css("font-size", "large"))
               .add(60, 80, getText("leertaste"))
               .add(300, 180, getText("practice_one2").settings.css("font-size", "large"))
               .print()

               ,

               newButton("weiter", "weiter")
               .center()
               .print()
               .wait()


    )

    .setOption("hideProgressBar", "true")

    ;


//////////////////////////////////////////////////////////////////////


PennController.Template("uebung.csv", variable =>

               PennController("practice_one",


               newImage("Picture", variable.Pic)
               .size(300, 300)

               ,

               newCanvas("PicWord", 300, 400)
               .add(0, 0, getImage("Picture"))
               .print()

               ,

               newVoiceRecorder("recorder")
               .record()

               ,

               newTimer("recording", 2000)
               .start()
               .wait()

               ,

               getVoiceRecorder("recorder")
               .stop()

               ,

               getCanvas("PicWord")
               .hidden()

               ,

               newCanvas("empty3", 1, 20)
               .print()

               ,

              newButton("weiter", "weiter")
              .center()
             // .print()

              ,

              newSelector("button")
             // .disableClicks()
              .add(getButton("weiter") )
              .settings.keys(     " "                   )
              .wait()
             /*
               newButton("weiter", "weiter")
               .center()
               .print()
               .wait()
   */

    )

    .setOption("hideProgressBar", "true")

    .log( "Picture"       , variable.Pic )
    .log( "Word"          , variable.Word )
    .log( "Cond"          , variable.Cond )
    .log( "ID"            , getVar("ID"))
    .log("Distractor", variable.Unr_Distractor)

    );


///////////////////////////////////////////////////////////////////////////////////////////////////////////// Uebung 2 -> Bilder benennen mit unrelated Distractor auf dem Bild

PennController("practice_two_start",

               newText("practice_two_instr", "In diesem letzten &Uuml;bungsabschnitt siehst du einige Bilder noch einmal. Deine Aufgabe ist es wieder, die Bilder so schnell wie m&ouml;glich zu benennen. Zus&auml;tzlich zu den Bildern erscheinen auch geschriebene Worte auf dem Bildschirm. Bitte ignoriere diese bei der Benennung!")

               ,

               newText("leertaste", "Sobald die Aufnahme endet, kannst du dich mit der Leertaste zum n&auml;chsten Bild klicken." )
               .settings.css("font-size", "large")

               ,

               newText("practice_two2", "Klicke <i>weiter</i>, um zu beginnen!")

               ,

               newCanvas("text", 800, 400)
               .add(60, 0, getText("practice_two_instr").settings.css("font-size", "large"))
               .add(60, 80, getText("leertaste"))
               .add(300, 180, getText("practice_two2").settings.css("font-size", "large"))
               .print()

               ,

               newButton("weiter", "weiter")
               .center()
               .print()
               .wait()

    )

    .setOption("hideProgressBar", "true")

    ;


//////////////////////////////////////////////////////////////////////

PennController.Template("uebung2.csv", variable =>

               PennController("practice_two",


               newImage("Picture", variable.Pic)
               .size(300, 300)

               ,

               newText("Distractor",variable.Unr_Distractor)

               ,

               newCanvas("Canvas", 300, 400)

             /*  ,

               newTimer("Intertrial", 1500)
               .start()
               .wait()
              */
               ,

               getCanvas("Canvas")
               .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
               .print()

               ,

               newTimer("ShowFixation", 1000)
               .start()
               .wait()

               ,

               getText("fixation")
               .remove()

               ,

               newTimer("ShowBlank", 500)
               .start()
               .wait()

               ,

               getCanvas("Canvas")
               .remove()


               ,

               newCanvas("Canvas2", 300, 400)
               .add(0, 0, getImage("Picture"))
               .add(100, 150, getText("Distractor").settings.css("font-size", "40px").settings.css("font-family", "Times New Roman") )
               .print()

               ,

               newVoiceRecorder("recorder")
               .record()

               ,

               newTimer("recording", 2000)
               .start()
               .wait()

               ,

               getVoiceRecorder("recorder")
               .stop()

               ,

               getCanvas("Canvas2")
               .hidden()

               ,

               newCanvas("empty3", 1, 20)
               .print()

               ,

              newButton("weiter", "weiter")
              .center()
             // .print()

              ,

              newSelector("button")
             // .disableClicks()
              .add(getButton("weiter") )
              .settings.keys(     " "                   )
              .wait()

              /*

               newButton("weiter", "weiter")
               .center()
               .print()
               .wait()
   */

    )

    .setOption("hideProgressBar", "true")

    .log( "Picture"       , variable.Pic )
    .log( "Word"          , variable.Word )
    .log( "Cond"          , variable.Cond )
    .log( "ID"            , getVar("ID"))
    .log("Distractor", variable.Unr_Distractor)

    );


///////////////////////////////////////////////////////////////////////////////////////////////////////////// MAIN -> vier Bloecke mit jeweils unterschiedlicher SOA -> Bilder benennen

PennController("main_start",

               newCanvas("text", 800, 400)
               .add(230, 0, newText("main_instr", "<b>Jetzt folgt das richtige Experiment.</b>").settings.css("font-size", "x-large").settings.bold())
               .add(60, 90, newText("main_instr2", "Deine Aufgabe ist es, die Bilder so schnell wie m&ouml;glich zu benennen. Auch jetzt werden wieder auf einigen Bildern geschriebene W&ouml;rter erscheinen, die du bei der Benennung ignorieren sollst.").settings.css("font-size", "large"))
               .add(60, 140,newText("leertaste", "Sobald die Aufnahme endet, kannst du dich mit der Leertaste zum n&auml;chsten Bild klicken." )
               .settings.css("font-size", "large"))
               .add(300, 180, newText("main2", "Klicke <i>weiter</i>, um zu beginnen!").settings.css("font-size", "large"))
               .print()

               ,

               newButton("weiter", "weiter")
               .center()
               .print()
               .wait()

    )

    .setOption("hideProgressBar", "true")

    ;


//////////////////////////////////////////////////////////////////////

PennController.Template("rand1.csv", variable =>

               PennController("main_SOA0ms",



               newCanvas("Canvas", 300, 400)
               .print()

         /*      ,

               newTimer("Intertrial", 1500)
               .start()
               .wait()
             */
               ,

               getCanvas("Canvas")
               .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
               .print()

               ,

               newTimer("ShowFixation", 1000)
               .start()
               .wait()

               ,

               getText("fixation")
               .remove()

               ,

               newTimer("ShowBlank", 500)
               .start()
               .wait()

               ,


               getCanvas("Canvas")
               .remove()


               ,

               newText("Unr_Distractor" , variable.Unr_Distractor)
          //     .settings.bold()

               ,

               newImage("Picture", variable.Pic)
               .size(300, 300)

               ,

               newVoiceRecorder("recorder")
               .record()

               ,

               newCanvas("Canvas2", 300, 400)
               .add(0, 0, getImage("Picture"))
               .add(100, 150, getText("Unr_Distractor").settings.css("font-size", "40px").settings.css("font-family", "Times New Roman"))
               .print()

               ,

               newTimer("PicWord", 1000)
               .start()
               .wait()

               ,

               getCanvas("Canvas2")
               .hidden()

               ,

               newTimer("recording", 1000)
               .start()
               .wait()

               ,

               getVoiceRecorder("recorder")
               .stop()


               ,


              newButton("weiter", "weiter")
              .center()
             // .print()

              ,

              newSelector("button")
             // .disableClicks()
              .add(getButton("weiter") )
              .settings.keys(     " "                   )
              .wait()

             /*

               newButton("weiter", "weiter")
               .center()
               .print()
               .wait()
   */

    )

    .setOption("hideProgressBar", "true")

    .log( "Picture"       , variable.Pic )
    .log( "Word"          , variable.Word )
    .log( "Cond"          , variable.Cond )
    .log( "ID"            , getVar("ID"))
    .log("Distractor", variable.Unr_Distractor)


    )
    ;


//////////////////////////////////////////////////////////////////////

PennController.Template("rand2.csv", variable =>

               PennController("main_SOA100ms",


               newCanvas("Canvas", 300, 400)
               .print()

           /*    ,

               newTimer("Intertrial", 1500)
               .start()
               .wait()
            */
               ,

               getCanvas("Canvas")
               .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
               .print()

               ,

               newTimer("ShowFixation", 1000)
               .start()
               .wait()

               ,

               getText("fixation")
               .remove()

               ,

               newTimer("ShowBlank", 500)
               .start()
               .wait()

               ,

               getCanvas("Canvas")
               .remove()

               ,

               newText("Unr_Distractor" , variable.Unr_Distractor)
              // .settings.bold()

               ,

               newImage("Picture", variable.Pic)
               .size(300, 300)

               ,

               newCanvas("Canvas2", 300, 400)
               .add(0, 0, getImage("Picture"))
               .print()

               ,

               newVoiceRecorder("recorder")
               .record()

               ,

               newTimer("ShowPic", 100)
               .start()
               .wait()

               ,

               getCanvas("Canvas2")
               .add(100, 150, getText("Unr_Distractor").settings.css("font-size", "40px").settings.css("font-family", "Times New Roman"))
               .print()

               ,

               newTimer("recording", 900)
               .start()
               .wait()

               ,

               getCanvas("Canvas2")
               .hidden()

               ,

               newTimer("DeletePic", 1000)
               .start()
               .wait()

               ,

               getVoiceRecorder("recorder")
               .stop()

               ,


              newButton("weiter", "weiter")
              .center()
             // .print()

              ,

              newSelector("button")
             // .disableClicks()
              .add(getButton("weiter") )
              .settings.keys(     " "                   )
              .wait()


               /*

               newButton("weiter", "weiter")
               .center()
               .print()
               .wait()
   */

    )

    .setOption("hideProgressBar", "true")

    .log( "Picture"       , variable.Pic )
    .log( "Word"          , variable.Word )
    .log( "Cond"          , variable.Cond )
    .log( "ID"            , getVar("ID"))
    .log("Distractor", variable.Unr_Distractor)

    )
    ;


//////////////////////////////////////////////////////////////////////

PennController.Template("rand3.csv", variable =>

               PennController("main_SOA-100ms",


               newCanvas("Canvas", 300, 400)
               .print()

         /*      ,

               newTimer("Intertrial", 1500)
               .start()
               .wait()
        */
               ,

               getCanvas("Canvas")
               .add(150, 150, newText("fixation", "+").settings.bold().settings.css("font-size", "xx-large"))
               .print()

               ,

               newTimer("ShowFixation", 1000)
               .start()
               .wait()

               ,

               getText("fixation")
               .remove()

               ,

               newTimer("ShowBlank", 500)
               .start()
               .wait()

               ,

               getCanvas("Canvas")
               .remove()

               ,

               newText("Unr_Distractor" , variable.Unr_Distractor)
             //  .settings.bold()

               ,

               newImage("Picture", variable.Pic)
               .size(300, 300)

               ,

               newCanvas("Canvas2", 300, 400)
               .add(0, 0, getImage("Picture"))
               .print()

               ,

               newVoiceRecorder("recorder")
               .record()

               ,

               newTimer("ShowPic", 200)
               .start()
               .wait()

               ,

               getCanvas("Canvas2")
               .add(100, 150, getText("Unr_Distractor").settings.css("font-size", "40px").settings.css("font-family", "Times New Roman")  )
               .print()

               ,

               newTimer("DeletePic", 800)
               .start()
               .wait()

               ,

               getCanvas("Canvas2")
               .hidden()

               ,

               newTimer("recording", 1000)
               .start()
               .wait()

               ,

               getVoiceRecorder("recorder")
               .stop()

               ,

              newButton("weiter", "weiter")
              .center()
             // .print()

              ,

              newSelector("button")
             // .disableClicks()
              .add(getButton("weiter") )
              .settings.keys(     " "                   )
              .wait()

               /*

               newButton("weiter", "weiter")
               .center()
               .print()
               .wait()
   */

    )

    .setOption("hideProgressBar", "true")

    .log( "Picture"       , variable.Pic )
    .log( "Word"          , variable.Word )
    .log( "Cond"          , variable.Cond )
    .log( "ID"            , getVar("ID"))
    .log("Distractor", variable.Unr_Distractor)

    )
    ;




////////////////////////////////////////////////////////////////////////////////////////////////////// Breaks

PennController("break",


              newCanvas("text", 800, 400)
              .add(250,50, newText("pleasewait", "Eine kurze Pause zur Erholung!").settings.css("font-size", "x-large"))
              .add(250,100, newText("pleasewait2", "Sobald du fortfahren kannst, erscheint unten der <i>weiter</i>-Knopf."))
              .print()


              ,

              newTimer("wait", 10000)
              .start()
              .wait()

              ,

              getCanvas("text")
              .remove()

              ,

              newCanvas("text2", 800, 400)
              .add(215, 50, newText("continue", "Du kannst das Experiment jetzt fortsetzen.") .settings.css("font-size", "x-large"))
              .print()

              ,

              newButton("weiter", "weiter")
              .center()
              .print()
              .wait()

    )

   .setOption("hideProgressBar", "true")
;


////////////////////////////////////////////////////////////////////// completion screen

PennController.SendResults("send");

              PennController("end",


              newCanvas("text", 800, 400)
              .add(250, 0, newText("thank", "<p>Vielen Dank f&uuml;r deine Teilnahme!</p>").settings.css("font-size", "x-large").settings.bold())
              .add(80, 120, newText("Code",  "Wichtiger Hinweis:  <br /> Bitte kopiere den folgenden Code und f&uuml;ge ihn in das daf&uuml;r vorgesehene Feld innerhalb deines Clickworker-Aufgabenformulars ein. <br /> Ohne die Eingabe dieses Codes kann eine Gutschrift deines Honorars nicht erfolgen!").settings.css("font-size", "large"))
              .add(80, 220, newText("Code2", "<b> Code: PWIBBP </b>").settings.css("font-size", "large"))
              .print()


              ,

              newButton("void")
              .wait()

    )

    .setOption("hideProgressBar", "true")

  ;
