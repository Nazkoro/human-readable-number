module.exports = function toReadable (number) {
    let humanNumber = ''
    let Arr =  (number.toString().split(''))
    let Arrnum = Arr.map(Number)
    let Arrnum2 = Arr.map(Number)
    let from_1_to_19 =''
    let from_20_to_99 =''
    let from_100_to_999 =''
    if(number >= 0 && number< 20){

        switch(number){
        

        case 0:
            from_1_to_19 = 'zero'
            break;
        case 1:
            from_1_to_19 = 'one'
                break;
         case 2:
            from_1_to_19 = 'two'
             break;
        case 3:
            from_1_to_19 = 'three'
            break;
        case 4:
            from_1_to_19 = 'four'
                break;
         case 5:
            from_1_to_19 = 'five'
             break;
        case 6:
            from_1_to_19 = 'six'
            break;
        case 7:
            from_1_to_19 = 'seven'
                break;
         case 8:
            from_1_to_19 = 'eight'
             break;
        case 9:
            from_1_to_19 = 'nine'
            break;
        case 10:
            from_1_to_19 = 'ten'
                break;
         case 11:
            from_1_to_19 = 'eleven'
             break;
        case 12:
            from_1_to_19 = 'twelve'
            break;
        case 13:
            from_1_to_19 = 'thirteen'
                break;
         case 14:
            from_1_to_19 = 'fourteen'
             break;
        case 15:
            from_1_to_19 = 'fifteen'
                break;
         case 16:
            from_1_to_19 = 'sixteen'
             break;
        case 17:
            from_1_to_19 = 'seventeen'
            break;
        case 18:
            from_1_to_19 = 'eighteen'
                break;
         case 19:
            from_1_to_19 = 'nineteen'
             break;
        
    }
    humanNumber= from_1_to_19
    }
  
    if(number > 19 && number< 100){

        switch(Arrnum[0]){
        
             case 2:
                from_20_to_99 = 'twenty'
                 break;
            case 3:
                from_20_to_99 = 'thirty'
                break;
            case 4:
                from_20_to_99 = 'forty'
                    break;
             case 5:
                from_20_to_99 = 'fifty'
                 break;
            case 6:
                from_20_to_99 = 'sixty'
                break;
            case 7:
                from_20_to_99 = 'seventy'
                    break;
             case 8:
                from_20_to_99 = 'eighty'
                 break;
            case 9:
                from_20_to_99 = 'ninety'
                break;
            
        }
        humanNumber+= from_20_to_99
        switch(Arrnum[1]){
        case 0:
            from_1_to_19 = ''
                break;
        case 1:
            from_1_to_19 = ' one'
                break;
         case 2:
            from_1_to_19 = ' two'
             break;
        case 3:
            from_1_to_19 = ' three'
            break;
        case 4:
            from_1_to_19 = ' four'
                break;
         case 5:
            from_1_to_19 = ' five'
             break;
        case 6:
            from_1_to_19 = ' six'
            break;
        case 7:
            from_1_to_19 = ' seven'
                break;
         case 8:
            from_1_to_19 = ' eight'
             break;
        case 9:
            from_1_to_19 = ' nine'
            break;
        }

        humanNumber+= from_1_to_19

    }

    if(number >=100 && number< 1000){
        Arrnum2.splice(0, 1)
        let zb = Number(Arrnum2.join(''))
    
        switch(Arrnum[0]){
            case 0:
            from_100_to_999 = ''
                break;
        
        case 1:
            from_100_to_999 = 'one hundred'
                break;
         case 2:
            from_100_to_999 = 'two hundred'
             break;
        case 3:
            from_100_to_999 = 'three hundred'
            break;
        case 4:
            from_100_to_999 = 'four hundred'
                break;
         case 5:
            from_100_to_999 = 'five hundred'
             break;
        case 6:
            from_100_to_999 = 'six hundred'
            break;
        case 7:
            from_100_to_999 = 'seven hundred'
                break;
         case 8:
            from_100_to_999 = 'eight hundred'
             break;
        case 9:
            from_100_to_999 = 'nine hundred'
            break;
       
        }

        humanNumber+= from_100_to_999

        if(Arrnum[1]===1){

             switch(zb){
                case 0:
                    from_1_to_19 = ''
                        break;
                case 1:
                    from_1_to_19 = ' one'
                        break;
                 case 2:
                    from_1_to_19 = ' two'
                     break;
                case 3:
                    from_1_to_19 = ' three'
                    break;
                case 4:
                    from_1_to_19 = ' four'
                        break;
                 case 5:
                    from_1_to_19 = ' five'
                     break;
                case 6:
                    from_1_to_19 = ' six'
                    break;
                case 7:
                    from_1_to_19 = ' seven'
                        break;
                 case 8:
                    from_1_to_19 = ' eight'
                     break;
                case 9:
                    from_1_to_19 = ' nine'
                    break;
                    case 10:
                    from_1_to_19 = ' ten'
                        break;
                 case 11:
                    from_1_to_19 = ' eleven'
                     break;
                case 12:
                    from_1_to_19 = ' twelve'
                    break;
                case 13:
                    from_1_to_19 = ' thirteen'
                        break;
                 case 14:
                    from_1_to_19 = ' fourteen'
                     break;
                case 15:
                    from_1_to_19 = ' fifteen'
                        break;
                 case 16:
                    from_1_to_19 = ' sixteen'
                     break;
                case 17:
                    from_1_to_19 = ' seventeen'
                    break;
                case 18:
                    from_1_to_19 = ' eighteen'
                        break;
                 case 19:
                    from_1_to_19 = ' nineteen'
                     break;
                }
                humanNumber+= from_1_to_19
                return humanNumber


        }
        switch(Arrnum[1]){
            case 0:
            from_20_to_99 = ''
                break;
        
             case 2:
                from_20_to_99 = ' twenty'
                 break;
            case 3:
                from_20_to_99 = ' thirty'
                break;
            case 4:
                from_20_to_99 = ' forty'
                    break;
             case 5:
                from_20_to_99 = ' fifty'
                 break;
            case 6:
                from_20_to_99 = ' sixty'
                break;
            case 7:
                from_20_to_99 = ' seventy'
                    break;
             case 8:
                from_20_to_99 = ' eighty'
                 break;
            case 9:
                from_20_to_99 = ' ninety'
                break;
            
        }
        humanNumber+= from_20_to_99
        switch(Arrnum[2]){
        case 0:
            from_1_to_19 = ''
                break;
        case 1:
            from_1_to_19 = ' one'
                break;
         case 2:
            from_1_to_19 = ' two'
             break;
        case 3:
            from_1_to_19 = ' three'
            break;
        case 4:
            from_1_to_19 = ' four'
                break;
         case 5:
            from_1_to_19 = ' five'
             break;
        case 6:
            from_1_to_19 = ' six'
            break;
        case 7:
            from_1_to_19 = ' seven'
                break;
         case 8:
            from_1_to_19 = ' eight'
             break;
        case 9:
            from_1_to_19 = ' nine'
            break;
            case 10:
            from_1_to_19 = ' ten'
                break;
         case 11:
            from_1_to_19 = ' eleven'
             break;
        case 12:
            from_1_to_19 = ' twelve'
            break;
        case 13:
            from_1_to_19 = ' thirteen'
                break;
         case 14:
            from_1_to_19 = ' fourteen'
             break;
        case 15:
            from_1_to_19 = ' fifteen'
                break;
         case 16:
            from_1_to_19 = ' sixteen'
             break;
        case 17:
            from_1_to_19 = ' seventeen'
            break;
        case 18:
            from_1_to_19 = ' eighteen'
                break;
         case 19:
            from_1_to_19 = ' nineteen'
             break;
        }

        humanNumber+= from_1_to_19

    }

    return humanNumber

}

    

