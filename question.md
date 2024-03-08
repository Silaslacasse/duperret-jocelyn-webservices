# QUESTIONS
Merci de répondre librement et le plus clairement possible aux questions suivantes:

# PUT & PATCH
Quelle est la différence entre un PUT un PATCH

On utilise le verbe PUT lorsque l'on souhaite modifier un object entièrement et PATCH lorsque l'on fait une seul modification. Cette convention n'est pas vraiment respecter.

# FETCH/AXIOS
#Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?

C'est a cause des CORS : CORS (Cross-Origin Resource Sharing) Firefox impose des restrictions CORS plus strictes que Postman.

# NGINX/APACHE
Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?

Les serveur apache on Nginx permet de faire du reverse proxy, soit gérer un grand nombre de requetes, de plus ils offrent des securité contre les attaques DDOS

# PERFORMANCES
Citez 3 axes vus en cours pour améliorer les performance d'une api Rest

- faire des tests
- mettre en place le cache
- utiliser de la compression de donnes