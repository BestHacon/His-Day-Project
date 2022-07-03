
//定义幕布的初始值
$(document).ready(function () {

	var settings = {

		width: 750,
		height: 750,
		autoResize: false,
		autoResizeMinWidth: null,
		autoResizeMaxWidth: null,
		autoResizeMinHeight: null,
		autoResizeMaxHeight: null,
		addMouseControls: true,
		addTouchControls: true,
		hideContextMenu: true,
		starCount: 6666,
		starBgCount: 2222,
		starBgColor: {
			r: 255,
			g: 255,
			b: 255
		},
		starBgColorRangeMin: 10,
		starBgColorRangeMax: 40,
		starColor: {
			r: 255,
			g: 255,
			b: 255
		},
		starColorRangeMin: 10,
		starColorRangeMax: 100,
		starfieldBackgroundColor: {
			r: 0,
			g: 0,
			b: 0
		},
		starDirection: 1,
		starSpeed: 20,
		starSpeedMax: 200,
		starSpeedAnimationDuration: 2,
		starFov: 300,
		starFovMin: 200,
		starFovAnimationDuration: 2,
		starRotationPermission: true,
		starRotationDirection: 1,
		starRotationSpeed: 0.0,
		starRotationSpeedMax: 1.0,
		starRotationAnimationDuration: 2,
		starWarpLineLength: 2.0,
		starWarpTunnelDiameter: 100,
		starFollowMouseSensitivity: 0.025,
		starFollowMouseXAxis: true,
		starFollowMouseYAxis: true

	};
	var warpdrive = new WarpDrive(document.getElementById('holder'));
});