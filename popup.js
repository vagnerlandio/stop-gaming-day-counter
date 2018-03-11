// get number of days saved on storage and to top popup.html
chrome.storage.sync.get("numberDays", function(result) {
    var numberDays = result.numberDays;
    var send_number = ("result:", numberDays);

    if (numberDays < 0) {
        document.getElementById('image').src = "./rank_images/rank_1.png";
        document.getElementById('rank-name').innerHTML = "Recruit";
        document.getElementById('number-days').innerHTML = numberDays;
    } else if (numberDays > 90) {
        document.getElementById('image').src = "./rank_images/rank_90.png";
        document.getElementById('rank-name').innerHTML = "Samurai";
        document.getElementById('number-days').innerHTML = numberDays;
    } else {
        document.getElementById('image').src = "./rank_images/rank_90.png";

        switch (numberDays) {
                case 1:
                    document.getElementById('rank_name').innerHTML = "Recruit";
                    break;
                case 2:
                    document.getElementById('rank_name').innerHTML = "Cadet Junior";
                    break;
                case 3:
                    document.getElementById('rank_name').innerHTML = "Cadet";
                    break;
                case 4:
                    document.getElementById('rank_name').innerHTML = "Cadet Senior";
                    break;
                case 5:
                    document.getElementById('rank_name').innerHTML = "Cadet 1st Class";
                    break;
                case 6:
                    document.getElementById('rank_name').innerHTML = "Soldier";
                    break;
                case 7:
                    document.getElementById('rank_name').innerHTML = "Private Basic";
                    break;
                case 8:
                    document.getElementById('rank_name').innerHTML = "Private 2nd Class";
                    break;
                case 9:
                    document.getElementById('rank_name').innerHTML = "Private";
                    break;
                case 10:
                    document.getElementById('rank_name').innerHTML = "Private 1st Class";
                    break;
                case 11:
                    document.getElementById('rank_name').innerHTML = "Specialist";
                    break;
                case 12:
                    document.getElementById('rank_name').innerHTML = "Gunnery Specialist";
                    break;
                case 13:
                    document.getElementById('rank_name').innerHTML = "Technical Specialist";
                    break;
                case 14:
                    document.getElementById('rank_name').innerHTML = "Specialist 1st Class";
                    break;
                case 15:
                    document.getElementById('rank_name').innerHTML = "Ranger";
                    break;
                case 16:
                    document.getElementById('rank_name').innerHTML = "ance Corporal";
                    break;
                case 17:
                    document.getElementById('rank_name').innerHTML = "Corporal";
                    break;
                case 18:
                    document.getElementById('rank_name').innerHTML = "Fireteam Leader";
                    break;
                case 19:
                    document.getElementById('rank_name').innerHTML = "Sergeant 3rd Class";
                    break;
                case 20:
                    document.getElementById('rank_name').innerHTML = "Sergeant 2nd Class";
                    break;
                case 21:
                    document.getElementById('rank_name').innerHTML = "Sergeant";
                    break;
                case 22:
                    document.getElementById('rank_name').innerHTML = "Sergeant 1st Class";
                    break;
                case 23:
                    document.getElementById('rank_name').innerHTML = "Staff Sergeant";
                    break;
                case 24:
                    document.getElementById('rank_name').innerHTML = "Gunnery Sergeant";
                    break;
                case 25:
                    document.getElementById('rank_name').innerHTML = "Master Sergeant";
                    break;
                case 26:
                    document.getElementById('rank_name').innerHTML = "First Sergeant";
                    break;
                case 27:
                    document.getElementById('rank_name').innerHTML = "Command Sergeant";
                    break;
                case 28:
                    document.getElementById('rank_name').innerHTML = "Master Gunnery Sergeant";
                    break;
                case 29:
                    document.getElementById('rank_name').innerHTML = "Sergeant Major";
                    break;
                case 30:
                    document.getElementById('rank_name').innerHTML = "Company Sergeant";
                    break;
                case 31:
                    document.getElementById('rank_name').innerHTML = "Warrant Officer Candidate";
                    break;
                case 32:
                    document.getElementById('rank_name').innerHTML = "Warrant Officer";
                    break;
                case 33:
                    document.getElementById('rank_name').innerHTML = "Chief Warrant Officer";
                    break;
                case 34:
                    document.getElementById('rank_name').innerHTML = "Chief Warrant Officer 1st Class";
                    break;
                case 35:
                    document.getElementById('rank_name').innerHTML = "Master Warrant Officer";
                    break;
                case 36:
                    document.getElementById('rank_name').innerHTML = "Quartermaster";
                    break;
                case 37:
                    document.getElementById('rank_name').innerHTML = "Officer Cadet Junior";
                    break;
                case 38:
                    document.getElementById('rank_name').innerHTML = "Officer Cadet Senior";
                    break;
                case 39:
                    document.getElementById('rank_name').innerHTML = "Ensign";
                    break;
                case 40:
                    document.getElementById('rank_name').innerHTML = "Second Lieutenant";
                    break;
                case 41:
                    document.getElementById('rank_name').innerHTML = "First Lieutenant";
                    break;
                case 42:
                    document.getElementById('rank_name').innerHTML = "Captain Lieutenant";
                    break;
                case 43:
                    document.getElementById('rank_name').innerHTML = "ieutenant";
                    break;
                case 44:
                    document.getElementById('rank_name').innerHTML = "ieutenant Colonel";
                    break;
                case 45:
                    document.getElementById('rank_name').innerHTML = "Captain Lieutenant";
                    break;
                case 46:
                    document.getElementById('rank_name').innerHTML = "Captain";
                    break;
                case 47:
                    document.getElementById('rank_name').innerHTML = "Captain 1";
                    break;
                case 48:
                    document.getElementById('rank_name').innerHTML = "Captain 2";
                    break;
                case 49:
                    document.getElementById('rank_name').innerHTML = "Captain 3";
                    break;
                case 50:
                    document.getElementById('rank_name').innerHTML = "Colonel";
                    break;
                case 51:
                    document.getElementById('rank_name').innerHTML = "Brigadier";
                    break;
                case 52:
                    document.getElementById('rank_name').innerHTML = "Field Marshal";
                    break;
                case 53:
                    document.getElementById('rank_name').innerHTML = "Commander";
                    break;
                case 54:
                    document.getElementById('rank_name').innerHTML = "High Commander";
                    break;
                case 55:
                    document.getElementById('rank_name').innerHTML = "Supreme Commander";
                    break;
                case 56:
                    document.getElementById('rank_name').innerHTML = "Major Genera";
                    break;
                case 57:
                    document.getElementById('rank_name').innerHTML = "ieutenant General";
                    break;
                case 58:
                    document.getElementById('rank_name').innerHTML = "General-Field Marshal";
                    break;
                case 59:
                    document.getElementById('rank_name').innerHTML = "SF Second Lieutenant";
                    break;
                case 60:
                    document.getElementById('rank_name').innerHTML = "SF First Lieutenant";
                    break;
                case 61:
                    document.getElementById('rank_name').innerHTML = "SF Sublieutenant";
                    break;
                case 62:
                    document.getElementById('rank_name').innerHTML = "SF Lieutenant";
                    break;
                case 63:
                    document.getElementById('rank_name').innerHTML = "SF Lieutenant-Colonel";
                    break;
                case 64:
                    document.getElementById('rank_name').innerHTML = "SF Lieutenant-Captain";
                    break;
                case 65:
                    document.getElementById('rank_name').innerHTML = "SF Captain";
                    break;
                case 66:
                    document.getElementById('rank_name').innerHTML = "SF Captain 1";
                    break;
                case 67:
                    document.getElementById('rank_name').innerHTML = "SF Captain 2";
                    break;
                case 68:
                    document.getElementById('rank_name').innerHTML = "SF Captain 3";
                    break;
                case 69:
                    document.getElementById('rank_name').innerHTML = "SF Colonel";
                    break;
                case 70:
                    document.getElementById('rank_name').innerHTML = "Warface";
                    break;
                case 71:
                    document.getElementById('rank_name').innerHTML = "Morrigan";
                    break;
                case 72:
                    document.getElementById('rank_name').innerHTML = "Odin";
                    break;
                case 73:
                    document.getElementById('rank_name').innerHTML = "Mars";
                    break;
                case 74:
                    document.getElementById('rank_name').innerHTML = "Athena";
                    break;
                case 75:
                    document.getElementById('rank_name').innerHTML = "Ashur/Horus";
                    break;
                case 76:
                    document.getElementById('rank_name').innerHTML = "Indra";
                    break;
                case 77:
                    document.getElementById('rank_name').innerHTML = "Guan Yu";
                    break;
                case 78:
                    document.getElementById('rank_name').innerHTML = "Mantus";
                    break;
                case 79:
                    document.getElementById('rank_name').innerHTML = "Artaius";
                    break;
                case 80:
                    document.getElementById('rank_name').innerHTML = "Ares";
                    break;
                case 81:
                    document.getElementById('rank_name').innerHTML = "Apache";
                    break;
                case 82:
                    document.getElementById('rank_name').innerHTML = "Spartan";
                    break;
                case 83:
                    document.getElementById('rank_name').innerHTML = "Maori";
                    break;
                case 84:
                    document.getElementById('rank_name').innerHTML = "Vityaz";
                    break;
                case 85:
                    document.getElementById('rank_name').innerHTML = "Hussar";
                    break;
                case 86:
                    document.getElementById('rank_name').innerHTML = "Viking";
                    break;
                case 87:
                    document.getElementById('rank_name').innerHTML = "Shinobi";
                    break;
                case 88:
                    document.getElementById('rank_name').innerHTML = "Mogul";
                    break;
                case 89:
                    document.getElementById('rank_name').innerHTML = "Templar";
                    break;
                case 90:
                    document.getElementById('rank_name').innerHTML = "Samurai";
                    break;
                default:
            }

        document.getElementById('number-days').innerHTML = numberDays;
    }
});
