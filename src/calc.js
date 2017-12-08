/*
** signe: '*', '+', '-', '/'
** gauche: un nombre non negatif
** droite: un nombre plus petit que 430
**
** La fonction renvoie le resultat du calcul
**
** La fonction renvoie null en cas d'erreur
*/



function calculatrice(signe, gauche, droite) {

    var result = null;
   
    if (!signe || !gauche || !droite ){
        return null;
    }
    else if (gauche < 0){
        return null;
    }
    else if (droite >= 430){
        return null;
    }
    else if (signe === "+"){
        result = gauche + droite;
    }
    
    else if (signe === "-"){
        result = gauche - droite;
    }
    
    else if (signe === "*"){
        result = gauche * droite;
    }
    
    else if (signe === "/"){
        result = gauche / droite;
    }
    
    
    
    return result;
}
 
module.exports = calculatrice;
