function inventory(input){

    let heroes =[];
    for(const heroData of input ){

        let[name ,level,items] = heroData.split(' / '); /*използва деструктуриране на масив. Предполагам, че heroData е низ, който съдържа информация за герой във формат "name / level / items". Редът разделя този низ на три части, като използва разделител "/" с метода split. */

        let hero = {
            name,
            level: Number(level),
            items:items

        };
        heroes.push(hero);
    }
    heroes.sort((a,b)=> a.level - b.level);

    for (const hero of heroes) {

        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
        
    }

}