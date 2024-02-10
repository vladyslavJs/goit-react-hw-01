import clsx from 'clsx';
import css from './Profile.module.css'

export const Profile = ({
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
}) => {
    return (
        <div className={css.container}>
            <div>
                <img className={css.avatar} src={image} alt="User avatar" />
                <p className={css.name} >{name}</p>
                <p className={css.information} >@{tag}</p>
                <p className={css.information} >{location}</p>
            </div>

            <ul className={css.statistic} >
                <li className={css.statisticItem} >
                    <span className={css.statisticName} >Followers</span>
                    <span className={clsx(css.statisticName, css.statisticCounter)} >{followers}</span>
                </li>
                <li className={css.statisticItem} >
                    <span className={css.statisticName} >Views</span>
                    <span className={clsx(css.statisticName, css.statisticCounter)} >{views}</span>
                </li>
                <li className={css.statisticItem} >
                    <span className={css.statisticName} >Likes</span>
                    <span className={clsx(css.statisticName, css.statisticCounter)} >{likes}</span>
                </li>
            </ul>
        </div>
    );
};