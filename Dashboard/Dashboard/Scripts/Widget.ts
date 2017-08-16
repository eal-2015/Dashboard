function initDashboard() {
    var run = new Dashboard();
    run.InsertWidgets();
}

//Widget & Dashboard----->
interface IWidget {
    title: string;
    size: WidgetSize;
    innerhtml: string;
}

enum WidgetSize {
    small = 1,
    medium,
    large
}
class Dashboard {
    widgets: IWidget[];

    constructor() {
        this.widgets = [new MapWidget()]
    }

    InsertWidgets() {
        var markup = this.GenerateWidgets();
        //$("#grid-container").append(markup);
    }

    GenerateWidgets() {
        let markup: string = "";
        if (!this.widgets) {
            this.widgets = [new MapWidget()];
        }
        for (var i = 0; i < this.widgets.length; i++) {

            switch (this.widgets[i].size) {
                case WidgetSize.large:
                    markup += this.GenerateLargeBox(this.widgets[i].title, this.widgets[i].innerhtml);
                    break;
                default:
            }
        }
        return markup;
    }

    GenerateLargeBox(title: string, innerhtml: string) {
        return "<div draggable='true' class='lt " +
            "lt-xs-x-0 " +
            "lt-xs-y-0 " +
            "lt-xs-w-1 " +
            "lt-xs-h-1 " +
            "lt-sm-x-0 " +
            "lt-sm-y-0 " +
            "lt-sm-w-2 " +
            "lt-sm-h-2 " +
            "lt-md-x-0 " +
            "lt-md-y-0 " +
            "lt-md-w-2 " +
            "lt-md-h-2 " +
            "lt-lg-x-0 " +
            "lt-lg-y-0 " +
            "lt-lg-w-2 " +
            "lt-lg-h-2'> " +
            "<div class='lt-body note box box-warning'> " +
            "<div class='box-header with-border'> " +
            "<h3 class='box-title'>" + title + "</h3> " +
            "<div class='box-tools pull-right'> " +
            "<button class='btn btn-box-tool' data-widget='remove'> <i class='fa fa-times'></i></button>" +
            "</div>" +
            "</div>" +
            "<div class='box-body'> " +
            innerhtml +
            "</div>" +
            "</div>" +
            "</div>";
    }
}
//<-----------------------

//Widget Map implementation
class MapWidget implements IWidget {
    title: string;
    size: WidgetSize;
    innerhtml: string;

    constructor() {
        this.title = "Stations Kort";
        this.size = WidgetSize.large;
        this.innerhtml = this.GenerateMarkup();
    }

    GenerateMarkup = (): string => {
        return "<style>#map {height: 400px; width: 100%;} </style><div id='map'> </div><script>function initMap() {var uluru = { lat: -25.363, lng: 131.044 };var map = new google.maps.Map(document.getElementById('map'), {zoom: 4,center: uluru});var marker = new google.maps.Marker({position: uluru,map: map});}</script> <script async defer src= 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAqg1BzcJOAGeLAIbA5tgrHBWtrfc6Rx5U&callback=initMap'> </script>";
    }
}
//<----------------------

