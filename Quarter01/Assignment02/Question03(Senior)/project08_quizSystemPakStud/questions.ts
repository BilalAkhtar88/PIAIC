import inquirer from "inquirer";

export async function q1 () {
    const answer1 = await inquirer.prompt(
        [
            {
                name:"Q1",
                type:"list",
                message: ("Q1. Pakistan tested first nuclear weapon on: "),
                choices:["24 May 1997", "26 May 1998", "28 May 1998", "30 May 1999"]    
            }
        ]
    );
    return (answer1.Q1 == "28 May 1998");
}

export async function q2 () {
    const answer2 = await inquirer.prompt(
        [
            {
                name:"Q2",
                type:"list",
                message: ("Q2. State Bank of Pakistan was inaugurated by Quaid E Azam Muhammad Ali Jinnah on: "),
                choices:["28 May 1948", "1 Jul 1948", "15 Aug 1947", "23 Mar 1948"]    
            }
        ]
    );
    return (answer2.Q2 == "1 Jul 1948");
}

export async function q3 () {
    const answer3 = await inquirer.prompt(
        [
            {
                name:"Q3",
                type:"list",
                message: ("Q3. The Muslim League passed Lahore Resolution, popularly known as Pakistan Resolution, on: "),
                choices:["23 Mar 1947", "14 Aug 1940", "14 Aug 1947", "23 Mar 1940"]    
            }
        ]
    );
    return (answer3.Q3 == "23 Mar 1940");
}

export async function q4 () {
    const answer4 = await inquirer.prompt(
        [
            {
                name:"Q4",
                type:"list",
                message: ("Q4. The form of government introduced by the 1973 constitution in Pakistan is: "),
                choices:["Socialist", "Parliamentary", "Presidential", "Hybrid"]    
            }
        ]
    );
    return (answer4.Q4 == "Parliamentary");
}

export async function q5 () {
    const answer5 = await inquirer.prompt(
        [
            {
                name:"Q5",
                type:"list",
                message: ("Q5. The “Quit India” Movement in 1942 was started by: "),
                choices:["Mahatma Gandhi", "Quaid E Azam Muhammad Ali Jinnah", "Allama Muhammad Iqbal", "Jawaharlal Nehru"]    
            }
        ]
    );
    return (answer5.Q5 == "Mahatma Gandhi");
}