# Instalacion
proyecto postulacion para Landscape

-> clonar repo con https de la branch "master"

1) Una vez inicializado y clonado en la carpeta donde este el proyecto se creara la imagen y container docker para correrlo
    -crear imagen: docker build . -t nombre/imagen
    -crear container basado en la imagen: docker run -it -p 9000:9000 --name nombreContainer nombre/imagen
    
2) Como no se posee un front end se utilizara de postman para "simularlo" 
    -se debera otorgar la api-key valida en el header de cada request que se realizara (la api-key esta en el archivo .env para copiarla)
    ![imagen](https://user-images.githubusercontent.com/30939827/213447392-12fd9af2-65cd-461e-bede-933d4b0dc49f.png)
    -Ahora solo falta crear requests y la app se podra probar:
    Post para crear users/permits/accesses 
    ![imagen](https://user-images.githubusercontent.com/30939827/213447830-e258822e-f4bd-47b1-86f6-2795247d2c67.png)
    
    Get para recuperar users/permits/accesses ( para recuperar un entry especifico se añade a la url api/url/"userId" )
    ![imagen](https://user-images.githubusercontent.com/30939827/213448163-40e6091c-1f56-4412-8daa-3a41538cc475.png)  
    
    Put para actualizar users/permits dado su userId (se asume que accesses no se modifica )
    ![imagen](https://user-images.githubusercontent.com/30939827/213448330-df0103b0-369e-469b-9e3b-a607bf94c654.png)
    
    Delete para borrar users/permits/accesses dado su userId
    ![imagen](https://user-images.githubusercontent.com/30939827/213448562-a46d8469-894f-49ee-b6cc-2aec8bb831f8.png)


    
