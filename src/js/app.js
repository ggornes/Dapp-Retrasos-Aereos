App = {
	web3Provider: null,
	// resultType: {'Sin Retraso':0, '(0 - 15)': 15, '(15-30)': 20, '30-45': 25, '45-60': 30},
	contracts: {},
	account: 0x0,
	loading: false,
	polizaNueva: {},
	mult: [0,1.5,2,2.5,3,4,5,6],
	contador: 0,
	valEth: 5224.99,
	factores: [
				[
					[1.437,1.3517,1.5158,1.4504,1.3779,1.3756,1.5158], //MEX-CUN
					[1.9507,1.8356,2.0568,1.9688,1.8711,1.8679,2.0568],
					[1.468,1.3831,1.5458,1.4813,1.4093,1.407,1.5458],
					[1.204,1.1323,1.2704,1.2153,1.1544,1.1524,1.2704],
					[1.3107,1.239,1.3753,1.3219,1.2613,1.2593,1.3753],
					[1.5612,1.4761,1.6376,1.5744,1.5026,1.5002,1.6376],
					[0.7939,0.773,0.8188,0.7978,0.7787,0.7782,0.8188],
					[0.752,0.7312,0.7763,0.7558,0.737,0.7364,0.7763],
					[1.097,1.0584,1.1367,1.1035,1.0698,1.0687,1.1367],
					[1.1285,1.0918,1.1682,1.1349,1.1024,1.1014,1.1682],
					[1.0255,0.9954,1.0596,1.0309,1.0039,1.0031,1.0596],
					[0.671,0.6589,0.6877,0.6734,0.662,0.6617,0.6877],
				],

				
				[
					[0.9204,0.8834,0.9594,0.911,0.8737,0.8302,0.9594], //CUN-MEX
					[1.1855,1.1385,1.2347,1.1736,1.1262,1.0705,1.2347], // febrero - do lu ma mi ju vi sa
					[0.7493,0.7181,0.7826,0.7413,0.7101,0.6742,0.7826],
					[0.6824,0.6539,0.7127,0.6751,0.6466,0.6139,0.7127],
					[0.9476,0.9105,0.9862,0.9382,0.9008,0.8567,0.9862],
					[1.191,1.1451,1.2385,1.1793,1.133,1.0781,1.2385],
					[0.688,0.6594,0.7186,0.6806,0.652,0.619,0.7186],
					[0.6267,0.6017,0.6529,0.6203,0.5951,0.5656,0.6529],
					[0.9478,0.9116,0.9853,0.9386,0.902,0.8585,0.9853],
					[1.0856,1.0448,1.1275,1.0753,1.034,0.9847,1.1275],
					[0.8964,0.8609,0.9335,0.8874,0.8517,0.8096,0.9335],
					[0.6298,0.6036,0.6578,0.6231,0.5968,0.5666,0.6578],
				],


				[
					[1.2649,1.3207,1.4003,1.4003,1.2706,1.2637,1.4003], //MEX-MTY
					[1.7562,1.8252,1.9196,1.9196,1.7634,1.7547,1.9196],
					[1.4175,1.473,1.5487,1.5487,1.4233,1.4163,1.5487],
					[1.3539,1.4109,1.4905,1.4905,1.3599,1.3527,1.4905],
					[1.1585,1.2039,1.2658,1.2658,1.1633,1.1575,1.2658],
					[1.2423,1.2903,1.3555,1.3555,1.2473,1.2413,1.3555],
					[1.0865,1.133,1.1983,1.1983,1.0914,1.0855,1.1983],
					[1.231,1.2797,1.3463,1.3463,1.2361,1.2299,1.3463],
					[1.3324,1.3866,1.4613,1.4613,1.3381,1.3312,1.4613],
					[1.2569,1.3077,1.3777,1.3777,1.2622,1.2558,1.3777],
					[1.0652,1.1116,1.1771,1.1771,1.07,1.0642,1.1771],
					[0.6307,0.659,0.7009,0.7009,0.6336,0.6301,0.7009],
				],

				[
					[1.0101,0.9701,1.1047,1.0482,0.9698,0.9225,1.1047], //MTY-MEX
					[1.1161,1.0703,1.2275,1.1603,1.0699,1.0167,1.2275],
					[0.8986,0.8614,0.9902,0.9347,0.861,0.8181,0.9902],
					[0.9301,0.8913,1.028,0.9683,0.891,0.847,1.028],
					[0.9244,0.886,1.02,0.962,0.8856,0.8415,1.02],
					[0.9106,0.8728,1.0037,0.9473,0.8725,0.829,1.0037],
					[0.7534,0.7222,0.8304,0.7838,0.7219,0.6859,0.8304],
					[0.8572,0.8243,0.9339,0.8883,0.824,0.7846,0.9339],
					[0.9125,0.8766,0.9968,0.9465,0.8763,0.8338,0.9968],
					[0.8617,0.8287,0.9381,0.8927,0.8284,0.789,0.9381],
					[0.8861,0.8499,0.9734,0.9208,0.8496,0.8075,0.9734],
					[0.6349,0.6092,0.7018,0.6607,0.6089,0.5801,0.7018],
				],

				[
					[1.3267,1.3327,1.4541,1.3437,1.3177,1.2772,1.4541], //MEX-GDL
					[1.5445,1.5512,1.6868,1.5636,1.5343,1.4883,1.6868],
					[1.5859,1.5928,1.7326,1.6056,1.5754,1.5281,1.7326],
					[1.3717,1.3775,1.4939,1.3882,1.3628,1.323,1.4939],
					[1.0408,1.0451,1.1316,1.0531,1.0342,1.0044,1.1316],
					[1.3779,1.3839,1.5061,1.3951,1.3687,1.3275,1.5061],
					[1.263,1.2684,1.3759,1.2783,1.2549,1.2181,1.3759],
					[1.2134,1.2183,1.3163,1.2274,1.2058,1.1718,1.3163],
					[1.4992,1.5055,1.6311,1.5171,1.4896,1.4465,1.6311],
					[1.3603,1.3664,1.4905,1.3777,1.3511,1.3096,1.4905],
					[1.3358,1.342,1.4699,1.3535,1.3264,1.2845,1.4699],
					[0.8307,0.8347,0.9212,0.8423,0.8246,0.7976,0.9212],
				],

				[
					[1.165,1.0326,1.165,1.0899,1.0148,0.9764,1.165], //GDL-MEX
					[1.1717,1.0344,1.1717,1.0932,1.0164,0.9779,1.1717],
					[0.9789,0.8642,0.9789,0.9133,0.8492,0.817,0.9789],
					[1.0312,0.9104,1.0312,0.9621,0.8945,0.8606,1.0312],
					[0.8842,0.7806,0.8842,0.8249,0.767,0.7379,0.8842],
					[0.9685,0.8551,0.9685,0.9036,0.8402,0.8083,0.9685],
					[0.8842,0.7806,0.8842,0.8249,0.767,0.7379,0.8842],
					[0.8039,0.7097,0.8039,0.75,0.6974,0.6709,0.8039],
					[1.1579,1.0342,1.1579,1.0886,1.017,0.9796,1.1579],
					[0.9817,0.8746,0.9817,0.9215,0.8599,0.8279,0.9817],
					[1.0958,0.9675,1.0958,1.0224,0.9506,0.9146,1.0958],
					[0.8842,0.7806,0.8842,0.8249,0.767,0.7379,0.8842],
				],

				[
					[0.9988,0.9607,1.0416,1.0226,0.944,0.9034,1.1076], //MEX-TIJ
					[1.4423,1.394,1.4951,1.4718,1.3724,1.319,1.5738],
					[1.144,1.1046,1.1874,1.1682,1.0869,1.0437,1.2524],
					[1.2508,1.2031,1.3044,1.2806,1.1821,1.1314,1.3871],
					[1.4539,1.4078,1.5041,1.4821,1.3869,1.3353,1.578],
					[1.7034,1.6471,1.765,1.7378,1.6217,1.5593,1.8564],
					[1.1237,1.0809,1.1719,1.1505,1.062,1.0164,1.2462],
					[1.1073,1.0651,1.1548,1.1337,1.0465,1.0016,1.228],
					[1.5442,1.4853,1.6104,1.581,1.4594,1.3967,1.7124],
					[1.4383,1.3895,1.4918,1.4682,1.3677,1.314,1.5717],
					[1.0217,0.9828,1.0655,1.0461,0.9656,0.9242,1.133],
					[0.687,0.6583,0.7203,0.7054,0.646,0.6168,0.7742],
				],

				[
					[0.7842,0.6586,0.7016,0.7016,0.7016,0.6473,0.7016], //TIJ-MEX
					[1.0742,0.9099,0.9673,0.9673,0.9673,0.8946,0.9673],
					[0.7706,0.6455,0.688,0.688,0.688,0.6343,0.688],
					[0.8829,0.7389,0.7877,0.7877,0.7877,0.7261,0.7877],
					[1.1043,0.9431,1.0004,1.0004,1.0004,0.9277,1.0004],
					[1.2354,1.063,1.1252,1.1252,1.1252,1.0461,1.1252],
					[1.0905,0.9141,0.9742,0.9742,0.9742,0.8984,0.9742],
					[1.0639,0.9099,0.9648,0.9648,0.9648,0.895,0.9648],
					[1.3683,1.1954,1.2594,1.2594,1.2594,1.1777,1.2594],
					[1.2276,1.0674,1.1263,1.1263,1.1263,1.0512,1.1263],
					[0.7052,0.5861,0.6253,0.6253,0.6253,0.576,0.6253],
					[0.7052,0.5861,0.6253,0.6253,0.6253,0.576,0.6253],
				],

			],	




	init: function(){
		console.log("init function");
		return App.initWeb3();





	},

///////////////////////////////////////////////////////////////////////////////////////////

	initWeb3: function (){
		console.log("initWeb3 function");
		if (typeof web3 !== "undefined"){
			App.web3Provider = web3.currentProvider;
			web3 = new Web3(web3.currentProvider);
		} else {
			App.web3Provider = new Web3.providers.HttpProvider('localhost:8545'); //tenemos que tener configurado la ip del testRPC 
			web3 = new Web3(App.web3Provider);
		}

		App.getAccountDetails(); 
		return App.initContract();
	},

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	initContract: function() {
		console.log("initContract function");
		$.getJSON('PolizaRetraso.json', function(PolizaRetrasoArtifact) {
			App.contracts.PolizaRetraso = TruffleContract(PolizaRetrasoArtifact);
			App.contracts.PolizaRetraso.setProvider(App.web3Provider);
			//App.listenToEvents(); //para "escuchar" eventos disparados en el contrato. Reload automatico.
			return App.reloadPolizas(); //Para obtener las polizas del smart contract
		});
	},

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	getAccountDetails: function(){
		console.log("getAccountDetails function");
		var $accountInfoWrapper = $("#accountInfo");

	    web3.eth.getCoinbase((err, account) => {
	    	if (err !== null) {
	        	console.log(err);
	        	return;
	    	}

	    	
	    	App.account = account;
	    	$accountInfoWrapper.find(".address").text(account);


	    	web3.eth.getBalance(account, (err, balance) => {
	    		if (err === null) { //si no hay error....
	    			$accountInfoWrapper.find(".balance").text(web3.fromWei(balance, "ether") + " ETH");
	    			$accountInfoWrapper.find(".balancePesos").text(Number((web3.fromWei(balance, "ether"))*App.valEth).toLocaleString() + " mxn");
	    		}
	    	});

	// hasta ahora hemos obtenido desde el testRPC (o sea el blockchain) la address y el balance de la cuenta
	  // ahora obtendremos la cantidad pendiente por retirar desde el contrato


	    	App.contracts.PolizaRetraso.deployed() //aqui consultaltamos el contrato
	    		.then((instance) => { //si se ecuentra en estado "deployed" entonces
	    			instance.retirosPendientes(account).then((withdrawAmount) => {
	    				console.log("DEBUG sin error en accound details polizaretraso deployed:" + withdrawAmount);
	    				var $withdrawalInfoWrapper = $("#withdrawalInfo"); //buscamos en el html el style tag withdrawalDetails
	    				$withdrawalInfoWrapper.find(".withdrawal").text(web3.fromWei(withdrawAmount, "ether") + " ETH"); //insertamos

	    				//Ahora, si la cantidad es positiva entonces habilitamos el botón de retirar
	    				if(withdrawAmount > 0){
	    					$withdrawalInfoWrapper.find("button").show();
	    				} else{
	    					$withdrawalInfoWrapper.find("button").hide();
	    				}
	    			});
	    		}).catch(function(err) {
	    			console.log(err);
	    			console.log("Debug: soy el error line 198");
	   				});
	   	});


    	// NEW CODE
		//




		var slider = document.getElementById("myRange");
		var input_prima = document.getElementById("prima");
		var prima_pesos = document.getElementById("primaPesos");

		
		slider.oninput = function() {

    		prima_pesos.textContent = ("$ " + Number(this.value)/1000*Number(App.valEth));
    		input_prima.value = Number(this.value)/1000;
    		App.displayPagos();
    		
		};
		


		
		//
		//
		// END OF NEW CODE




	},

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	reloadPolizas: function(){
		console.log("reloadPolizas function");
		if (App.loading) {
			return;
		}
		App.loading = true;
		App.getAccountDetails(); //reload account info
		var contractInstance;
		App.contracts.PolizaRetraso.deployed().then((instance) => {
			contractInstance = instance;
			return contractInstance.getPolizasTodas(); //checar bien
		}).then((polIds) => {
			$('#areaDisplay').empty(); //Basicamente es obtener cuantas polizas hay en el contrato y borrar el DOM en index.html

			for (var i = 0; i < polIds.length; i++) {
				var polId = parseInt(polIds[i]);
				contractInstance.pols(polId).then((pol) => { 
					console.log("contract instance: pol=[]  .... :" + pol);
					App.displayPol(pol); //Esta funcion es para cargar el area de las polizas solicitadas
				});
			}
			App.loading = false;

		}).catch((err) => {
			console.log(err);
			App.loading = false;
		});
	},

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//pol:
//
// struct Pol {
// pol[0] -> uint id; 
// pol[1] -> address contratante;
// pol[2] -> address asegurador;
// pol[3] -> uint factor; //el factor depende de los estimadores
// pol[4] -> uint256 prima;
// pol[5] -> uint256 maxpago;
// pol[6] -> uint result;
// pol[7] -> uint tretraso;



	displayPol: function(pol){ //recibe el vector pol del contrato
		console.log("displayPol function"); 





/////
//// asi almacenamos las polizas que provienen del Smart Contract en un vector dentro de la App.
//// cada polizasReload hay que vaciarlo y volverlo a poblar
//// con el objetivo de poblar el DOM en el html de manera dinamica

// App.polizaContrato[i].id = pol[0];
// App.polizaContrato[i].contratante = pol[1];
// App.polizaContrato[i].asegurador = pol[2];
// App.polizaContrato[i].factor = pol[3];
// App.polizaContrato[i].prima = pol[4];
// App.polizaContrato[i].maxpago = pol[5];



		var polId = pol[0];
		var contratante = pol[1];
		var asegurador = pol[2];
		var factor = pol[3];
		var prima = pol[4];
		var maxpago = pol[5];
		var result = pol[6];
		var tretraso = pol[7];
		var maxpago2 = prima*6*factor/10000; // problema si es tipo float. ojo aqui.

		var $areaDisplay = $("#areaDisplay");
		var $displayPolizas = $("#displayPolizas");

		$displayPolizas.find(".id-pol").text(pol[0]);
		//NOTA: falta adecuar el html el area display. Fecha, ruta y otros elementos no los almacena el contrato
		//$displayPolizas.find(".ruta").text(obj.ruta);
		//$displayPolizas.find(".fecha").text(obj.fecha);
		$displayPolizas.find(".prima").text(prima/1000000000000000000 + " ETH");
		$displayPolizas.find(".max-pago").text(maxpago2/1000000000000000000 + " ETH");
		$displayPolizas.find(".factor").text(factor/10000); //result
		$displayPolizas.find(".resultado-aleat").text(result); //result
		$displayPolizas.find(".tretraso").text(tretraso);


		$displayPolizas.find(".btn-emitir").attr('data-id', polId); //Id de la poliza
		$displayPolizas.find(".btn-emitir").attr('data-amount', maxpago2); //jala el valor de maxpago2



		if (contratante == App.account) {
			$displayPolizas.find(".contratante").text(contratante + " (You)");
			$displayPolizas.find(".btn-emitir").hide();
		} else {
		 	$displayPolizas.find(".contratante").text(contratante);
			$displayPolizas.find(".btn-emitir").show();
		}

		if (asegurador == App.account) {
			$displayPolizas.find(".asegurador").text(asegurador + " (You)");
			$displayPolizas.find(".btn-emitir").hide();
		} else {
		 	$displayPolizas.find(".asegurador").text(asegurador);
		}

		if (result==1 || (result == 0 && tretraso == 0)) {
			$displayPolizas.find(".btn-emitir").hide();
		}

		// if (contratante != "0x0" && asegurador != "0x0") {
		// 	$displayPolizas.find(".btn-emitir").hide();
		// }

		console.log("polId: " + polId + " contratante: " + contratante + " asegurador: " + asegurador);





		$areaDisplay.append($displayPolizas.html());
	},

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	emitirPoliza: function(button){
		console.log("emitirPoliza function");
		var $button = $(button);
		var polId = parseInt($button.data('id')); //NOTA: estos atributos se definieron en displayPolizas()
		var maxpago = parseInt($button.data('amount')); //NOTA: estos atributos se definieron en displayPolizas()
		console.log("polID = " + polId);
		console.log("maxpago = " + maxpago);

		App.contracts.PolizaRetraso.deployed()
			.then((instance) => {
				return instance.EmitirPoliza(polId, {
					from: App.account,
					value: maxpago,
					gas: 500000
				});
			}).then((result) => {
				console.log("Poliza Emitida");
				console.log(result);
			}).catch((err) => {
				console.error(err);
			});
		return false; // return false to prevent default behaviour
	},

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	withdrawal: function(){
		console.log("withdrawal function");
		App.contracts.PolizaRetraso.deployed()
			.then((instance) => {
				return instance.retirar({
					from: App.account,
					gas: 500000
				});

			}).then(function(result) {
				console.log("Retiro Exitoso");
				console.log(result);
				App.getAccountDetails();
			}).catch(function(err){
				console.error(err);
			});
	},

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	solicitarPoliza: function(){ 

		console.log("solicitarPoliza function");
		App.leerInputs();

		if (App.polizaNueva.prima <= 0 || isNaN(App.polizaNueva.prima)){
			alert("La prima no puede ser menor a cero.");
			return false;
		}

		var prima = App.polizaNueva.prima*1000000000000000000; //en WEI se multiplica para hacer operaciones con enteros
		var factor = App.polizaNueva.factor*10000; //se multiplica para hacer operaciones con enteros
		App.contracts.PolizaRetraso.deployed()
			.then((instance) => {
				return instance.solicitarPol(factor, {
					from: App.account,
					value: prima,
					gas: 500000
				})
			})
			.then((result) => {
				console.log("Poliza solicitada");
				console.log(result);

				//relodeamos el DisplayArea y los datos de la cuenta
				App.reloadPolizas();
				App.getAccountDetails();
			})
			App.erasePagos(); //borramos los pagos del display
			App.polizaNueva = {}; //borramos el objeto temporal polizaNueva

			App.contador ++;
			var contadorPol = document.querySelector(".contadorPol");
			contadorPol.textContent = App.contador;

		return false; // return false to prevent default behaviour
	},
// NOTA: lo que se hizo fue utilizar la funcion leerInputs para almacenarlos en en un objeto llamado PolizaNueva.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	setTretraso: function(tretraso) {
		//var tretraso = document.getElementById('tretrasoInput').value;
		App.contracts.PolizaRetraso.deployed()
			.then((instance) => {
				return instance.Set_tretraso(tretraso, {
					from: App.account, // quien deberia pagar el gas?
					gas: 500000
				})
			})
			.then((result) => {
				console.log("Evento Aleatorio Simulado");
				console.log(result);
				App.reloadPolizas();
				App.getAccountDetails();
			})
	},

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// mini funciones   #################################################### ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////

	leerInputs: function() {
		//Leemos los inputs desde el html y los almacenamos en un objeto llamado polizaNueva
		console.log("leerInputs function");
		var mU_input = document.getElementById("mU");
		var gA_input = document.getElementById("gA");
		var mS_input = document.getElementById("mS");
		var mU = mU_input.options[mU_input.selectedIndex].value*100; //convierte de texto a numerico tipo float
		var gA = gA_input.options[gA_input.selectedIndex].value*100; //al smart contract se debe pasar tipo int
		var mS = mS_input.options[mS_input.selectedIndex].value*100;
		var recargos = (100 - mU - gA) / (100 + mS);
		console.log(recargos);
		
		App.polizaNueva.recargos = recargos;
		// App.polizaNueva.recargos = 1;

		

		var x = document.getElementById("formInput");
		inputs = [];
		for (var i = 0; i < 3; i++) {
			inputs[i] = x.elements[i].value; 
			console.log(inputs[i]);
		}

		var fecha2 = new Date(inputs[1]);


		App.polizaNueva.fecha = fecha2;
		App.polizaNueva.año = fecha2.getYear()+1900;
		App.polizaNueva.mes = fecha2.getMonth()+1;
		App.polizaNueva.dia = fecha2.getDay();
		//App.polizaNueva.prima = Number(inputs[2]); DEBUG
		App.polizaNueva.prima = Number(document.getElementById("prima").value);
		
		var rutaElegida = document.getElementById("ruta");
		var rutaNumero = rutaElegida.options[rutaElegida.selectedIndex].value;
		var rutaNombre = rutaElegida.options[rutaElegida.selectedIndex].text;
		App.polizaNueva.ruta = rutaNombre;
		App.polizaNueva.factorFloat = App.factores[rutaNumero][App.polizaNueva.mes-1][(App.polizaNueva.dia+1)%7]*App.polizaNueva.recargos;
		App.polizaNueva.factor = App.polizaNueva.factorFloat.toFixed(4); //debug aqui
		//App.polizaNueva.factor = App.factores[MEXCUN][MARZO][JUEVES];
		//App.polizaNueva.factor = App.factores[0][2][4] = 1.4093; //1.437

		// return polizaNueva;
		var prima_pesos = document.getElementById("primaPesos");
		prima_pesos.textContent = ("$ " + Number(App.polizaNueva.prima*App.valEth));
		
	},

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////
	displayPagos: function(){ //para el boton "Ver pagos"
		console.log("displayPagos function");
		App.leerInputs();

		var pagos = document.querySelectorAll(".pagos"); //en ETH
		var pagos2 = document.querySelectorAll(".pagos2"); //en MXN

		for (var i = 0; i < 7; i++) {

			pagos[i].textContent = (App.mult[i+1]*App.polizaNueva.factor*App.polizaNueva.prima).toLocaleString(); //ETH
			pagos2[i].textContent = (App.mult[i+1]*App.polizaNueva.factor*App.polizaNueva.prima*App.valEth).toLocaleString(); //MXN
		}

		//VALORES ESPERADOS... 

		// var valorespContratante = document.querySelector("#valorespContratante");
		// valorespContratante.textContent = App.polizaNueva.piporgamma[i]*pago[i];

		// E[contratante] = prima*(1-pi) - (pago[i]*prob_pago[i])*pi
		// E[asegurado] = (pago[i]*prob_pago[i])*pi - prima*(1-pi)
},


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 	erasePagos: function() { //para borrar la tabla "Pagos en caso de retraso"
// 		console.log("erasePagos function");
// 		var pagos = document.querySelectorAll(".pagos");
// 		for (var i = 0; i < 7; i++) {
// 			pagos[i].textContent = "-";
// 		}
// },

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////// ################################                                 mini funciones
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

} //Es para cerrar el objeto App


$(function() {
  $(window).load(function() {
    // we start our App after window loaded
    App.init();
  });
});