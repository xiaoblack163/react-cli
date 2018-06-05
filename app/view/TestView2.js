import React, { Component } from 'react'
import { Badge, Spin } from 'antd'
import echarts from 'echarts/lib/echarts'
import bar from 'echarts/lib/chart/bar'
import tooltip from 'echarts/lib/component/tooltip'
import title from 'echarts/lib/component/title'
import LazyLoad from 'react-lazyload'
import EchartPanel from '../components/EchartPanel'

class TestView2 extends Component {
    componentDidMount() {
        const myChart = echarts.init(this.refs.echart);
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts ' },
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
    spinRender() {
        return (
            <div className="example">
                <Spin />
            </div>
        )

    }
    render() {
        return (
            <div className='nf-container'>
                <div ref='echart' id='main' style={{width: '400px', height: '400px'}}></div>
                <div style={{height: '400px'}}></div>
                <LazyLoad debounce={500} placeholder={this.spinRender()}>
                    <div style={{ height: '400px'}}>
                        <EchartPanel />
                    </div>
                </LazyLoad>
            </div>
        )
    }
}

export default TestView2
