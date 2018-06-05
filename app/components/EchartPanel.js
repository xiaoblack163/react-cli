import React, { Component } from 'react'
import { lazyload } from 'react-lazyload'
import { Spin } from 'antd'
import echarts from 'echarts/lib/echarts'
import bar from 'echarts/lib/chart/bar'
import tooltip from 'echarts/lib/component/tooltip'
import title from 'echarts/lib/component/title'

class EchartPanel extends Component {
    componentDidMount() {
        var myChart = echarts.init(this.refs.echart);
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }

  render() {
    return (
        <div ref='echart' id='main' style={{width: '400px', height: '400px'}}></div>
    )
  }
}

export default EchartPanel
