import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import { isScrolledIntoViewFromTop } from '../js/Effects';

const SongList = () => {
    const tabs = document.querySelectorAll('.song-list__tab');
    const cards = document.querySelectorAll('.song-list__card');
    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            const current = document.querySelector('.song-list__tab--active');
            current.classList.remove('song-list__tab--active');
            current.nextElementSibling.classList.add('song-list__card');
            current.nextElementSibling.classList.remove(
                'song-list__card--active'
            );
            current.nextElementSibling.classList.remove(
                'song-list__card--active--animate'
            );
            tab.nextElementSibling.classList.remove('song-list__card');
            tab.nextElementSibling.classList.add('song-list__card--active');
            tab.classList.add('song-list__tab--active');
        });
    });

    const target1 = document.getElementsByClassName('song-list__wrapper');
    const target2 = document.getElementsByClassName('song-list__card--active');

    const section = document.getElementsByClassName('section-song-list');

    window.addEventListener('scroll', () => {
        if (isScrolledIntoViewFromTop(section[0])) {
            if (target1[0].classList.contains('song-list--animate')) {
                target2[0].classList.add('song-list__card--active');
            } else {
                target2[0].classList.add('song-list__card--active--animate');
            }
            target1[0].classList.add('song-list--animate');
        } else {
            target1[0].classList.remove('song-list--animate');
            target2[0].classList.remove('song-list__card--active--animate');
        }
    });

    return (
        <section className="section-song-list" id="song-list">
            <div className="song-list__wrapper">
                <div className="song-list">
                    <div className="song-list__heading song-list__heading--top">
                        Songs<span>&rarr;</span>
                    </div>
                    <div className="song-list__audio">
                        <AudioPlayer />
                    </div>
                    <div className="song-list__tab song-list__tab--active">
                        <h3>Classical</h3>
                    </div>
                    <div className="song-list__card--active ">
                        <ul>
                            <li>
                                Air on the G String <small>by</small> J.S. Bach
                            </li>
                            <li>
                                Allegro, “Spring” from the Four Seasons{' '}
                                <small>by</small> A. Vivaldi{' '}
                            </li>
                            <li>
                                Arrival of the Queen of Sheba <small>by</small>{' '}
                                G.F. Handel
                            </li>
                            <li>
                                Ava Maria <small>by</small> Franz Schubert{' '}
                            </li>
                            <li>
                                Bouree <small>by</small> J.S. Bach
                            </li>
                            <li>
                                Bouree <small>by</small> G.F. Handel{' '}
                            </li>
                            <li>
                                Bridal Chorus (from Lohengrin) <small>by</small>{' '}
                                Richard Wagner{' '}
                            </li>
                            <li>
                                Canon in D <small>by</small> Johann Pachelbel{' '}
                            </li>
                            <li>
                                Gavotte in D Major <small>by</small> J.S. Bach
                            </li>
                            <li>
                                Hornpipe from “Water Music” <small>by</small>{' '}
                                G.F. Handel
                            </li>
                            <li>
                                Humoresque <small>by</small> A. Dvorak
                            </li>
                            <li>
                                Jeus’, Joy of Man’s Desiring <small>by</small>{' '}
                                J.S. Bach
                            </li>
                            <li>
                                La Rejouissance from “Royal Fireworks{' '}
                                <small>by</small> G.F. Handel
                            </li>
                            <li>
                                Largo, “Winter” from the Four Seasons{' '}
                                <small>by</small> A. Vivaldi
                            </li>
                            <li>
                                Méditation (Thaïs) <small>by</small> Jules
                                Massenet
                            </li>
                            <li>
                                Minuet <small>by</small> J.S. Bach
                            </li>
                            <li>
                                Minuet in G <small>by</small> Ludwig van
                                Beethoven
                            </li>
                            <li>
                                Ode to Joy <small>by</small> Ludwig van
                                Beethoven
                            </li>
                            <li>
                                Rondeau from “Masterpiece Theater”{' '}
                                <small>by</small> Jean-Joseph Mouret
                            </li>
                            <li>
                                Sleepers Awake <small>by</small> J.S. Bach
                            </li>
                            <li>
                                Trumpet Tune <small>by</small> Henry Purcell
                            </li>
                            <li>
                                Trumpet Voluntary in D Major <small>by</small>{' '}
                                Jeremiah Clarke
                            </li>
                            <li>
                                {' '}
                                Waltz <small>by</small> Johannes Brahms
                            </li>
                            <li>
                                Wedding March (from A Midsummer’s Night Dream){' '}
                                <small>by</small> F. Mendelssohn{' '}
                            </li>
                        </ul>
                    </div>
                    <div className="song-list__tab">
                        <h3>Folk</h3>
                    </div>
                    <div className="song-list__card ">
                        <ul>
                            <li>Arkansas Traveler</li>
                            <li>
                                Ashokan Farwell <small>by</small> J. Unger
                            </li>
                            <li>Blackberry Blossom</li>
                            <li>Devils Dream</li>
                            <li>Soldiers Jig</li>
                            <li>Swallowtail Jig</li>
                            <li>
                                The Lover’s Waltz <small>by</small> J. Unger
                            </li>
                            <li>Old Joe Clark</li>
                            <li>Wagon Wheel</li>
                        </ul>
                    </div>
                    <div className="song-list__tab">
                        <h3>Hymns</h3>
                    </div>
                    <div className="song-list__card ">
                        <ul>
                            <li>Amazing Grace </li>
                            <li>Be Thou My Vision</li>
                            <li>Come Thou Fount of Every Blessing</li>
                            <li>Holy, Holy, Holy</li>
                            <li>How Great Thou Art</li>
                            <li>Simple Gifts </li>
                        </ul>
                    </div>
                    <div className="song-list__tab">
                        <h3>Pop</h3>
                    </div>
                    <div className="song-list__card ">
                        <ul>
                            <li>
                                {' '}
                                A Thousand Years <small>by</small> Christina
                                Perri{' '}
                            </li>
                            <li>
                                Ain’t No Sunshine <small>by</small> Bill Withers{' '}
                            </li>
                            <li>
                                All I Ask of You from “Phantom of the Opera”
                            </li>
                            <li>
                                All My Love <small>by</small> Led Zeppelin{' '}
                            </li>
                            <li>
                                All of Me <small>by</small> John Legend
                            </li>
                            <li>
                                All You Need is Love <small>by</small> The
                                Beatles{' '}
                            </li>
                            <li>
                                At Last <small>by</small> Etta James
                            </li>
                            <li> A Whole New World from Aladdin </li>
                            <li>
                                Best Day of My Life <small>by</small> American
                                Authors{' '}
                            </li>
                            <li>
                                Billie Jean <small>by</small> Michael Jackson
                            </li>
                            <li>
                                Bittersweet Symphony <small>by</small> The Verve
                            </li>
                            <li>
                                Can’t Help Falling in Love <small>by</small>{' '}
                                Elvis Presley{' '}
                            </li>
                            <li>
                                Can You Feel the Love Tonight <small>by</small>{' '}
                                Elton John
                            </li>
                            <li>Colors of the Wind from Pocahontas </li>
                            <li>
                                Come Fly with Me <small>by</small> Frank Sinatra{' '}
                            </li>
                            <li>
                                Don’t Stop Believin’ <small>by</small> Journey{' '}
                            </li>
                            <li>
                                Every Breath You Take <small>by</small> Sting
                            </li>
                            <li>
                                Fields of Gold <small>by</small> Sting{' '}
                            </li>
                            <li>
                                For the Love of a Princess Theme from Braveheart{' '}
                            </li>
                            <li>
                                Hallelujah <small>by</small> Leonard Cohen
                            </li>
                            <li>
                                {' '}
                                Here Comes the Sun <small>by</small> The Beatles
                            </li>
                            <li>
                                I Only Want to be With You <small>by</small>{' '}
                                Dusty Springfield{' '}
                            </li>
                            <li>Let’s Stay Together - AL Green</li>
                            <li>
                                Love me Like You Do <small>by</small> Ellie
                                Goulding
                            </li>
                            <li>
                                Make You Feel My Love <small>by</small> Adele{' '}
                            </li>
                            <li>
                                Marry You <small>by</small> Bruno Mars{' '}
                            </li>
                            <li>
                                Moon River <small>by</small> Henry Mancini{' '}
                            </li>
                            <li>
                                My Girl <small>by</small> The Temptations{' '}
                            </li>
                            <li>
                                Perfect <small>by</small> Ed Sheeran
                            </li>
                            <li>
                                Rather Be <small>by</small> Clean Bandit
                            </li>
                            <li>
                                Somewhere Over the Rainbow <small>by</small>{' '}
                                Harold Arlen
                            </li>
                            <li>
                                Stand <small>by</small> Me <small>by</small> Ben
                                E. King{' '}
                            </li>
                            <li>
                                Sweet Caroline <small>by</small> Neil Diamond
                            </li>
                            <li>
                                This Will Be (an Everlasting Love){' '}
                                <small>by</small> Natalie Cole{' '}
                            </li>
                            <li>
                                Viva la Vida <small>by</small> Coldplay
                            </li>
                            <li>
                                What a Wonderful World <small>by</small> Louis
                                Armstrong
                            </li>
                            <li>
                                Wonderful Tonight <small>by</small> Eric Clapton{' '}
                            </li>
                            <li>
                                Young, Dumb and Broke <small>by</small> Khalid{' '}
                            </li>
                        </ul>
                    </div>
                    <div className="song-list__tab">
                        <h3>Jazz</h3>
                    </div>
                    <div className="song-list__card">
                        <ul>
                            <li>All of Me by Seymour Gerard </li>
                            <li>Autumn Leaves by Kosman/Mercer/Prevert </li>
                            <li>Black Orpheus by Luiz Bonfa </li>
                            <li>Fee-Fi-Fo-Fum by Wayne Shorter </li>
                            <li>Girl from Ipanema by Antonio Carlos Jobim</li>
                            <li>
                                It Don’t Mean a Thing (if you ain’t got that
                                swing) by Duke Ellington{' '}
                            </li>
                            <li>Meditation by Antonio Carlos Jobim </li>
                            <li>
                                Quiet Nights of Quiet Stars by Antonio Carlos
                                Jobim{' '}
                            </li>
                            <li>Summertime by George Gershwin </li>
                            <li>That’s Amore by Warren/Brooks </li>
                            <li>
                                When You Wish Upon A Star by Harline/Washington
                            </li>
                        </ul>
                    </div>
                    <div className="song-list__heading song-list__heading--bottom">
                        <span>&larr;</span>Samples
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SongList;
