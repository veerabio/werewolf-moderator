import React from 'react';

export default class Game extends React.Component {
  render() {

    return (
      <div>
	<div class="text-center">
		<h1>Game</h1>
	</div>
	<hr />

	<div class="col-md-4 col-md-offset-4">
		<div class="panel panel-default ">
			<div class="panel-body">
				<div class="media">
					<div class="media-left media-middle">
						<a href="#">
							<img class="media-object" src="https://dummyimage.com/85x85/000/fff" alt="..." />
						</a>
					</div>
					<div class="media-body">
						<h4 class="media-heading">Bodyguard</h4>
						Total: 1
					</div>
				</div>
				<div class="media">
					<div class="media-left media-middle">
						<a href="#">
							<img class="media-object" src="https://dummyimage.com/85x85/000/fff" alt="..." />
						</a>
					</div>
					<div class="media-body">
						<h4 class="media-heading">Villager</h4>
						Total: 3
					</div>
				</div>
				<div class="media">
					<div class="media-left media-middle">
						<a href="#">
							<img class="media-object" src="https://dummyimage.com/85x85/000/fff" alt="..." />
						</a>
					</div>
					<div class="media-body">
						<h4 class="media-heading">Werewolf</h4>
						Total: 3
					</div>
				</div>
				<div class="media">
					<div class="media-left media-middle">
						<a href="#" >
							<img class="media-object" src="https://dummyimage.com/85x85/000/fff" alt="..." />
						</a>
					</div>
					<div class="media-body">
						<h4 class="media-heading">Virginia Woolf</h4>
						Total: 1
					</div>
				</div>
			</div>
			<div class="panel-footer">
				<button type="button" id="startBalanced" class="btn btn-success pull-right col-md-6 col-xs-12"><i class="fa fa-book" aria-hidden="true"></i> Screenplay</button>
				<button type="button" id="backBtn" class="btn btn-default pull-left col-md-4 col-xs-12"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
</div>
    );
  }
}