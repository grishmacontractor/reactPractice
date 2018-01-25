import React from 'react';
import Panel from './Panel'

export default class App extends React.Component {
    render() {
        return (
            <div className='divpanel'>
                    <Panel title="list of movies">
                        <div className='divborder'><img height={'180'} width={'150'} src="https://mariasmoviereviews.files.wordpress.com/2013/04/jurassic-park-movie-poster.jpg" alt='download'/></div>
                        <div className='divborder'><img height={'180'} width={'150'} src="https://mariasmoviereviews.files.wordpress.com/2013/04/jurassic-park-movie-poster.jpg" alt='download'/></div>
                        <div className='divborder'><img height={'180'} width={'150'} src="https://mariasmoviereviews.files.wordpress.com/2013/04/jurassic-park-movie-poster.jpg" alt='download'/></div>
                        <div className='divborder'><img height={'180'} width={'150'} src="https://mariasmoviereviews.files.wordpress.com/2013/04/jurassic-park-movie-poster.jpg" alt='download'/></div>
                        <div className='divborder'><img height={'180'} width={'150'} src="https://mariasmoviereviews.files.wordpress.com/2013/04/jurassic-park-movie-poster.jpg" alt='download'/></div>
                    </Panel>
            </div>
        )
    }
}
