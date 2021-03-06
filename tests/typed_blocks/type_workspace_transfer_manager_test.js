function test_type_workspace_transfer_manager_simpleAvailables() {
  var workspace = create_typed_workspace();
  var workbenches = [];
  try {
    var letBlock1 = workspace.newBlock('let_typed');
    var letBlock2 = workspace.newBlock('let_typed');
    var letBlock3 = workspace.newBlock('let_typed');
    var letBlock4 = workspace.newBlock('let_typed');
    workbenches.push(create_mock_workbench(letBlock1));
    workbenches.push(create_mock_workbench(letBlock2));
    workbenches.push(create_mock_workbench(letBlock3));
    workbenches.push(create_mock_workbench(letBlock4));
    letBlock1.getInput('EXP2').connection.connect(letBlock2.outputConnection);
    letBlock1.getInput('EXP1').connection.connect(letBlock3.outputConnection);

    var manager = create_mock_transfer_manager(letBlock1);
    assertFalse(manager.allowedToTransferTo_(workbenches[0].getWorkspace()));
    assertFalse(manager.allowedToTransferTo_(workbenches[1].getWorkspace()));
    assertFalse(manager.allowedToTransferTo_(workbenches[2].getWorkspace()));
    assertTrue(manager.allowedToTransferTo_(workbenches[3].getWorkspace()));
    manager.dispose();

    manager = create_mock_transfer_manager(letBlock2);
    assertTrue(manager.allowedToTransferTo_(workbenches[0].getWorkspace()));
    assertFalse(manager.allowedToTransferTo_(workbenches[1].getWorkspace()));
    assertTrue(manager.allowedToTransferTo_(workbenches[2].getWorkspace()));
    assertTrue(manager.allowedToTransferTo_(workbenches[3].getWorkspace()));
    manager.dispose();

    manager = create_mock_transfer_manager(letBlock4);
    assertTrue(manager.allowedToTransferTo_(workbenches[0].getWorkspace()));
    assertTrue(manager.allowedToTransferTo_(workbenches[1].getWorkspace()));
    assertTrue(manager.allowedToTransferTo_(workbenches[2].getWorkspace()));
    assertFalse(manager.allowedToTransferTo_(workbenches[3].getWorkspace()));
    manager.dispose();
  } finally {
    for (var i = 0, workbench; workbench = workbenches[i]; i++) {
      workbench.dispose();
    }
    workspace.dispose();
  }
}

function test_type_workspace_transfer_manager_nonRelatedWorkspaces() {
  var workspace1 = create_typed_workspace();
  var workspace2 = create_typed_workspace();
  var workbenches = [];
  try {
    var letBlock1 = workspace1.newBlock('let_typed');
    var letBlock2 = workspace2.newBlock('let_typed');
    workbenches.push(create_mock_workbench(letBlock1));
    workbenches.push(create_mock_workbench(letBlock2));

    var manager = create_mock_transfer_manager(letBlock1);
    assertTrue(manager.allowedToTransferTo_(workspace1));
    assertFalse(manager.allowedToTransferTo_(workspace2));
    assertFalse(manager.allowedToTransferTo_(workbenches[0].getWorkspace()));
    assertFalse(manager.allowedToTransferTo_(workbenches[1].getWorkspace()));
    manager.dispose();

    manager = create_mock_transfer_manager(letBlock2);
    assertFalse(manager.allowedToTransferTo_(workspace1));
    assertTrue(manager.allowedToTransferTo_(workspace2));
    assertFalse(manager.allowedToTransferTo_(workbenches[0].getWorkspace()));
    assertFalse(manager.allowedToTransferTo_(workbenches[1].getWorkspace()));
    manager.dispose();

    var intBlockWS = workbenches[0].getWorkspace().newBlock('int_typed');
    manager = create_mock_transfer_manager(intBlockWS);
    assertTrue(manager.allowedToTransferTo_(workspace1));
    assertFalse(manager.allowedToTransferTo_(workspace2));
    assertTrue(manager.allowedToTransferTo_(workbenches[0].getWorkspace()));
    assertFalse(manager.allowedToTransferTo_(workbenches[1].getWorkspace()));
    manager.dispose();
  } finally {
    for (var i = 0, workbench; workbench = workbenches[i]; i++) {
      workbench.dispose();
    }
    workspace1.dispose();
    workspace2.dispose();
  }
}
