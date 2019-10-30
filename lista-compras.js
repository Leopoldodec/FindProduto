function ListaComprasController($scope) {
    $scope.itens = [
        {produto: 'Leite', quantidade: 2, comprado: false},
        {produto: 'Cerveja', quantidade: 12, comprado: false}
    ];

    $scope.adicionaItem = function () {



	var listaatual = $scope.itens;
	var cont = 1;
	var existe = false;
	var filtro=$scope.item.produto;

	for( cont = 0; cont < listaatual.length; cont++) {
	
		if(filtro==listaatual[cont].produto) {	
			existe = true;

			alert('Produto ( ' + listaatual[cont].produto + ' ' + listaatual[cont].quantidade + ' ) já listado !');
			braeak;

		}

	}

	if (existe==false) {

        	$scope.itens.push({produto: $scope.item.produto,
                           quantidade: $scope.item.quantidade,
                           comprado: false});
       
       	
		$scope.item.produto = $scope.item.quantidade = '';

	}
    };
}