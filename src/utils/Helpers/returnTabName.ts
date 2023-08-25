const returnTabName = (topic: string, language: string) => {
      let returnedTopic = "";
      switch (topic) {
          case "languages":
              returnedTopic = language === "english" ? "Languages" : "Langues";
              break;
          case "iOS":
              returnedTopic = "iOS";
              break;
          case "Python":
              returnedTopic = "Python";
              break;
          case "collaborative":
              returnedTopic = language === "english" ? "Collaborative Work" : "Collaborative Work";
              break;
          case "prototyping":
              returnedTopic = "Prototyping";
              break;
          case "code":
              returnedTopic = "Code Editors"; 
              break;
          case "Applications":
              returnedTopic = "Applications";
              break;
          case "learning":
              returnedTopic = language === "english" ? "Learning Resources" : "Learning Resources";
              break;
          default: 
              returnedTopic = "";
              break;
      }
      return returnedTopic;
  }
  
  export default returnTabName;