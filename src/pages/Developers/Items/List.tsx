import { useTransition, animated } from 'react-spring'
import Developer from 'src/types/Developer'
import Item from './Item'
import classes from './styles.module.css'

const height = 65
const List = ({ developers }: { developers: Developer[] }) => {
    const transitions = useTransition(
        developers.map((e, i) => ({ data: { ...e }, y: i * height, height })),
        {
            key: (item: any) => item.data.id,
            from: { height: 0, opacity: 0 },
            leave: { height: 0, opacity: 0 },
            enter: ({ y, height }) => ({ y, height, opacity: 1 }),
            update: ({ y, height }) => ({ y, height }),
        },
    )

    return (
        <div className={classes.list} style={{ height: height * developers.length }}>
            {transitions((style, { data }, t, i) => (
                <animated.div
                    className={classes['item-container']}
                    style={{ zIndex: developers.length - i, ...style }}
                >
                    <div className={classes.item}>
                        <Item developer={data} />
                    </div>
                </animated.div>
            ))}
        </div>
    )
}

export default List
