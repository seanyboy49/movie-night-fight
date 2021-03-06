"""empty message

Revision ID: 2159be979d2a
Revises: 1f04ac107aaa
Create Date: 2021-01-20 20:11:01.460765

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2159be979d2a'
down_revision = '1f04ac107aaa'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_movies_name', table_name='movies')
    op.create_index(op.f('ix_movies_name'), 'movies', ['name'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_movies_name'), table_name='movies')
    op.create_index('ix_movies_name', 'movies', ['name'], unique=True)
    # ### end Alembic commands ###
