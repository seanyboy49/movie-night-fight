"""empty message

Revision ID: 89ed69c900aa
Revises: 217cebdf8a0b
Create Date: 2021-01-01 23:05:53.757994

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '89ed69c900aa'
down_revision = '217cebdf8a0b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user_houses', sa.Column('user_role', sa.String(length=30), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user_houses', 'user_role')
    # ### end Alembic commands ###
